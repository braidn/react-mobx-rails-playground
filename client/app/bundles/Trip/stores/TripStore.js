import { observable, action } from 'mobx'
import TripApi from '../services/TripApi'

class TripStore {
  @observable trip = {}
  @observable checkins = []

  constructor() {
    this.tripApi = new TripApi()
  }

  @action createTrip = (name) => {
    this.tripApi.createTrip(name).
      then ( trip => {
        this.trip = trip
        this.tripApi.subscribeTrip(trip.viewer_uuid, checkin => {
          this.recordCheckin = checkin
        })
        this.postCheckin()
      })
  }
}

const store = new TripStore
export default store
