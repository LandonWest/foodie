class AddPicToEvents < ActiveRecord::Migration
  def change
    add_column :events, :pic, :string
  end
end
