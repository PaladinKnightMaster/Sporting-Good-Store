import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  items = [new Item({ name: 'Air Jordans', price: 499, quantity: 10, img: "https://sneakerbardetroit.com/wp-content/uploads/2017/09/toro-bravo-air-jordan-4-1.png", description:'Do you believe you can fly?'}),
  
  new Item({ name: 'AI Jersey', price: 350, quantity: 10, img: "https://thumbor-gc.tomandco.uk/unsafe/trim/fit-in/513x641/center/middle/smart/filters:upscale():fill(white):sharpen(0.5,0.5,true)/https://www.mitchellandness.co.uk/static/media/catalog/product/i/m/SMJYGS18199-P76SCAR96AIV_1.png", description:'Ball like Iverson'}),

  new Item({ name: 'Football', price: 499, quantity: 10, img: "https://image.goat.com/750/attachments/product_template_pictures/images/044/519/023/original/618610_00.png.png", description:'dkdjfkjsfjdfs'}),

  new Item({ name: 'Football', price: 499, quantity: 10, img: "https://i.pinimg.com/originals/d7/e4/fe/d7e4fe0e1fed943823a9a2cd86215cd2.png", description:'dkdjfkjsfjdfs'}),

  new Item({ name: 'Football', price: 499, quantity: 10, img: "https://webstockreview.net/images/jersey-clipart-jersey-kobe-bryant-8.png", description:'dkdjfkjsfjdfs'}),

  new Item({ name: 'Football', price: 499, quantity: 10, img: "http://cdn.shopify.com/s/files/1/0324/6781/2487/products/nike-dunk-high-prm-skateboard-shoes-616752016-3_1024x.png?v=1599288995", description:'dkdjfkjsfjdfs'}) ]

}




export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
