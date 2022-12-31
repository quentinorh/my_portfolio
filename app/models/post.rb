class Post < ApplicationRecord
  acts_as_taggable_on :tags
  has_many_attached :photos
end
