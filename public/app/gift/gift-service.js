
// @ts-ignore
let api = axios.create({
  baseURL: "//localhost:3000/api/gift"
})

let _gifts = []


export default class GiftService {
  getGifts(cb) {
    api.get('').then(res => {
      console.log(res.data)
      _gifts = res.data
      cb()
    })
  }
  get gifts() {
    return _gifts
  }
}