class User < ApplicationRecord
  has_many :book_users, dependent: :destroy
  has_many :books, through: :book_users
end
