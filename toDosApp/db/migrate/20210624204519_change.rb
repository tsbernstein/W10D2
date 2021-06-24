class Change < ActiveRecord::Migration[5.2]
  def change
    rename_table :create_todos, :todo
  end
end
