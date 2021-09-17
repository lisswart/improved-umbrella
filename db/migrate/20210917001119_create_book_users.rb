class CreateBookUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :book_users do |t|
      t.string :read_status
      t.string :tags
      t.text :description
      t.text :review
      t.text :notes
      t.integer :rating
      t.boolean :is_notes_added
      t.boolean :is_review_added
      t.boolean :is_rating_added
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
