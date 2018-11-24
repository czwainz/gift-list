import GiftController from './gift/gift-controller.js'

class App {
  constructor() {
    this.controllers = {
      giftController: new GiftController()
    }
  }
}

// @ts-ignore
window.app = new App()