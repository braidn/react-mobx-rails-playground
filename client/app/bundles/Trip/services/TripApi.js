import ActionCable from 'actioncable'

export default class TripApi {
  constructor() {
    this.cable = ActionCable.createConsumer('/cable')
    this.subscription = false
  }

  createTrip = (name) => {
    return fetch('/trips', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        trip: {name}
      })
    }).
      then(response => response.json())
  }
}
