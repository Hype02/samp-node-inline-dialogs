import {ShowPlayerDialog, SampPlayer, OnDialogResponse} from 'samp-node-lib'

type dialogObject = {
    dialogId: number,
    callback: Function
}

export  class InlineDialog{

    static dialogCallbacks: dialogObject[] = []
    static lastId = 0

    player: SampPlayer
    style: number
    caption: string
    info: string
    button: string
    button2: string
    callback: Function
    id: number

    constructor(player: SampPlayer, style: number, caption: string, info: string, button: string, button2:string, callback: Function ){

        player = player
        style = style
        caption = caption
        info = info
        button = button
        button2 = button2
        callback = callback
        this.id = InlineDialog.lastId

        const dialogobj: dialogObject = {
            dialogId: InlineDialog.lastId, 
             callback: callback
        }

        InlineDialog.dialogCallbacks.push(dialogobj) 

        ShowPlayerDialog(player.playerid, InlineDialog.lastId, style, caption, info, button, button2)
        InlineDialog.lastId++
        return this
    }

    Show(){
        ShowPlayerDialog(this.player.playerid, this.id, this.style, this.caption, this.info, this.button, this.button2)
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
