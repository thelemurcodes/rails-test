import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"];

  connect() {
    console.log("Hello from hello controller")
  }

  search(event) {
    event.preventDefault()
    console.log(solanaWeb3);
    const key = new solanaWeb3.PublicKey(this.inputTarget.value)
    //const key = new Web3.PublicKey()
    //console.log(`key: ${key}`)
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'))
    //console.log(`connection: ${connection}`)

    connection.getBalance(key).then(balance => {
      console.log('balance:  ')
      console.log(balance / solanaWeb3.LAMPORTS_PER_SOL)
    })

  }
}
