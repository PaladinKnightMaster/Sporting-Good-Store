import { ProxyState } from "../AppState.js";
import { Item } from "../Models/Item.js";



function _drawItems(){
  let items = ProxyState.items;
  let template = '';
  console.log(items)
  items.forEach(i => template += i.CardTemplate)
  document.getElementById('app').innerHTML =  template 
  
}


export class ItemsController{
  constructor(){
    ProxyState.on('items', _drawItems)
    _drawItems()
  }
}

// function buyItem(){

//   ProxyState.items.filter(i => i.id === items.id
  

//   console.log('purchased')

// }