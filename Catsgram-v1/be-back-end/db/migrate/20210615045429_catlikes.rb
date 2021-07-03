class Catlikes < ActiveRecord::Migration[6.1]
  def change
    change_column :cats, :likes, :integer
  end
end

