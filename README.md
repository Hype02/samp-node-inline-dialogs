# samp-node-inline-dialogs
InlineDialogs for SAMP NodeJS framework.

# Requirements
1. samp-node-lib https://github.com/peterszombati/samp-node-lib

# How to install
Clone the repo to your folder of choice, best practise is to create "lib" folder in your project, and clone this repo to it.
After that, go to your code and add at the top of your code:
```js
import{ InlineDialog }from './lib/InlineDialog'
```
# How to use

 ```js
       const theDialog = new InlineDialog(
            player,
            DIALOG_STYLE.LIST,
            "Test",
            "test\ntest\n2",
            "ok", "",
            (listitem: number, response: number, inputtext: string)=>
                {
                    if(response){
                        SendClientMessage(player.playerid, "rgba(255, 255, 255, 0)", "listitem " + listitem + " inputtext: "+inputtext)
                 
                            theDialog.caption = "you have choosen " + listitem

                        
                        theDialog.Show(player)
                    }
                    else
                        SendClientMessage(player.playerid, "rgba(255, 255, 255, 0)", "Thank you for clicking the dialog.")
                 }
        
          )
       // somewhere later in the code
       theDialog.Hide(player)
       // oh we maybe now want to show it back
       theDialog.Show(player)
  ```
  
 # Constructor parameters
 ```js
 
 constructor(player: SampPlayer, style: number, caption: string, info: string, button: string, button2:string, callback: Function )
 ```
 
# Have fun!
