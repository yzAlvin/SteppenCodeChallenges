import { useState } from "react"
import AddItemForm from "./AddItemForm"
import Item from "./Item"

function saveItemsLocally(items) {
  if (items.length > 0) {
    localStorage.setItem("items", items)
  } else {
    localStorage.removeItem("items")
  }
}

export const ItemList = ({ data }) => {
  const [items, setItems] = useState(data)
  saveItemsLocally(items)

  const handleAddItem = (item) => setItems([...items, item])
  const removeItem = (itemToRemove) =>
    setItems(items.filter((item) => item !== itemToRemove))
  const editItem = (originalItem, editedItem) =>
    setItems(items.map((item) => (item === originalItem ? editedItem : item)))

  return (
    <>
      <div className="box">
        {items?.map((item) => (
          <Item
            key={item}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        ))}
        <AddItemForm handleAddItems={handleAddItem} />
      </div>
    </>
  )
}
