class TripsController < ApplicationController # :nodoc:
  def create
    trip = Trip.create(trip_params)
    render json: trip.to_json
  end

  private

  def trip_params
    params.require(:trip).permit(:name)
  end
end
