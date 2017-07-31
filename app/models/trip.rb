class Trip < ApplicationRecord
  has_many :checkins

  before_validation :set_uuids, on: [:create]

  private

  def set_uuids
    self.viewer_uuid = SecureRandom.uuid
    self.owner_uuid = SecureRandom.uuid
  end
end
