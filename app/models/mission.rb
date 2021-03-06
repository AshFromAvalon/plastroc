class Mission < ApplicationRecord
  belongs_to :user
  belongs_to :package

  scope :ongoing, -> { where(status: 'ongoing') }

  def recently_done?
    (DateTime.now.to_i - completed_at.to_i) < 10
  end
end
