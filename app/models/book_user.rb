class BookUser < ApplicationRecord
  belongs_to :user
  belongs_to :book
  attr_accessor :rating, :is_review_added, :notes, :review
end
