import GiftService from './gift-service.js'

let _gs = new GiftService

function draw() {
  let template = ''
  _gs.gifts.forEach(gift => {
    template += `
    <div class="col card" style="max-width: 15rem; max-height: 25rem;">
      <div class="card-img-top"><img src="${gift.img}" style="max-width: 10rem; max-height: 20rem;"/></div>
      <div class="card-body"><button type="btn btn-secondary"><a href="${gift.location}">${gift.name}</button></a></div>
    </div>
    `
  })
  document.getElementById("gifts").innerHTML = template
}

export default class GiftController {
  constructor() {
    _gs.getGifts(draw)
  }
  draw() {
    draw()
  }
}