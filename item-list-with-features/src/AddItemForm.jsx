import { useRef } from "react"

const AddItemForm = ({ handleAddItems }) => {
  const formRef = useRef()

  const addItem = (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const item = data.get("item")
    formRef.current.reset()
    handleAddItems(item)
  }

  return (
    <form className="mt-3" onSubmit={addItem} ref={formRef}>
      <div>
        <input
          className="input is-primary is-inline"
          type="text"
          name="item"
          placeholder="Add an item!"
        />
        <button className="button is-success" type="submit">
          Add ➕
        </button>
      </div>
    </form>
  )
}

export default AddItemForm
