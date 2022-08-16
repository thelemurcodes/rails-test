import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"];

  connect() {
    console.log("Hello from hello controller")
  }

  search(event) {
    event.preventDefault()
    const key = new Web3.PublicKey(this.inputTarget.value)
    console.log(`key: ${key}`)
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    console.log(`connection: ${connection}`)

    connection.getBalance(key).then(balance => {
      console.log('balance:  ')
      console.log(balance / Web3.LAMPORTS_PER_SOL)
    })

  }
}
