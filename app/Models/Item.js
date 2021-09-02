import { generateId } from "../Utils/generateId.js";


export class Item{
  constructor(itemData) {
    this.id = itemData.id || generateId()
    this.name = itemData.name;
    this.quantity = itemData.quantity
    this.price = itemData.price
    this.description = itemData.description
    this.img = itemData.img
    
  }

  get CardTemplate(){
    return /*html*/ `
    <div class="col-4 ">
    <div class="card m-4" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top " alt="...">
    <div class="card-body">
    <h5 class="">${this.name}</h5>
    <p class="card-text">${this.description}</p>
    <a href="#" onclick = "app.itemsController.buyItem" class="btn btn-primary buy">$${this.price}</a>
    <span class="purchase" >Purchase</span>
    <p> Current Stock: 
    <span type=number>${this.quantity}</span>
    </p> 
      </div>
    </div>
</div>
`}
}



