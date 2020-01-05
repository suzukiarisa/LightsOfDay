class UserRelationship < ApplicationRecord

  belongs_to :following, class_name: "User"
  belongs_to :follower, class_name: "User"
  # validates :user_id, presence: true
  validates :following_id, presence: true
  validates :follower_id, presence: true
end
