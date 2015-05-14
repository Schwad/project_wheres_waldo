class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :correct_tags
      t.datetime :game_end
      t.timestamps null: false
    end
  end
end
