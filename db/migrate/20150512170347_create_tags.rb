class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :x
      t.integer :y
      t.integer :character_id

      t.timestamps null: false
    end
  end
end
