class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :firstname
      t.string :lastname
      t.string :nametitle
      t.text :bio

      t.timestamps
    end
  end
end
