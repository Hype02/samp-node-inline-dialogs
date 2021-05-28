# samp-node-inline-dialogs
InlineDialogs for SAMP NodeJS framework.

# Requirements
1. samp-node-lib https://github.com/peterszombati/samp-node-lib

# How to install
Clone the repo to your folder of choice, best practise is to create "lib" folder in your project, and clone this repo to it.
After that, go to your code and add at the top of your code:
```js
import InlineDialog from './lib/inlineDialog'
```
# How to use

 ```js
 const theDialog = new InlineDialog(player, DIALOG_STYLE.LIST, "Test", "test1\ntest2\ntest3", "ok", "", (listitem: any, inputtext: any)=>{
        SendClientMessage(player.playerid, "rgba(255, 255, 255, 0)", "listitem " + listitem + " inputtext: "+inputtext)
        theDialog.Show()
   })
  ```
  
  ```js
 theDialog.Hide()
 ```
 
# Have fun!
