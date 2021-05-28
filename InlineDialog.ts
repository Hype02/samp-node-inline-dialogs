import {ShowPlayerDialog, SampPlayer, OnDialogResponse} from 'samp-node-lib'

type dialogObject = {
    dialogId: number,
    callback: Function
}

export default class InlineDialog{

    static dialogCallbacks = []
    static lastId = 0

    player: SampPlayer
    style: number
    caption: string
    info: string
    button: string
    button2: string
    callback: Function

    constructor(player: SampPlayer, style: number, caption: string, info: string, button: string, button2:string, callback: Function ){

        player = player
        style = style
        caption = caption
        info = info
        button = button
        button2 = button2
        callback = callback

        InlineDialog.dialogCallbacks.push({
            dialogId: InlineDialog.lastId, 
            callback: callback
        }) 
        ShowPlayerDialog(player.playerid, InlineDialog.lastId, style, caption, info, button, button2)
        InlineDialog.lastId++
        return this
    }

    Show(){
        ShowPlayerDialog(this.player.playerid, InlineDialog.lastId, this.style, this.caption, this.info, this.button, this.button2)
    }
    Hide(){
        ShowPlayerDialog(this.player.playerid, -1, 0, "", "", "", "")
    }
}

OnDialogResponse((player, dialogid, listitem, inputtext)=>{

   InlineDialog.dialogCallbacks.map((obj: dialogObject)=>{
       if(obj.dialogId === dialogid){
           obj.callback(listitem, inputtext)
           InlineDialog.dialogCallbacks = InlineDialog.dialogCallbacks.filter((e: dialogObject)=>e.dialogId==dialogid)
       }
   })
})
