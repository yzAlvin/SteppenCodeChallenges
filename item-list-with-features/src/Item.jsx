import { useState, useRef } from "react"

const Item = ({ item, removeItem, editItem }) => {
  const [buttonStyle, setButtonStyle] = useState({ display: "none" })
  const showButtons = () => setButtonStyle({ display: "block" })
  const hideButtons = () => setButtonStyle({ display: "none" })
  const [editing, setEditing] = useState(false)
  const [confirmDeletion, setConfirmDeletion] = useState(false)
  const startEdittingItem = () => setEditing(true)

  const ConfirmDelete = ({ show }) => (
    <div className={`modal ${show ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="box has-background-white modal-content">
        <p className="mb-4">Are you sure you want to delete {item}?</p>
        <button
          className="button is-danger is-small"
          onClick={() => removeItem(item)}
        >
          Delete
        </button>
        <button
          className="button is-light is-small"
          onClick={() => setConfirmDeletion(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  )

  const NotEditing = () => (
    <div
      className="is-flex"
      onMouseEnter={showButtons}
      onMouseLeave={hideButtons}
    >
      <div>
        <button
          className="button is-danger is-small"
          style={buttonStyle}
          onClick={() => setConfirmDeletion(true)}
        >
          Delete 🗑️
        </button>
        <ConfirmDelete show={confirmDeletion} />
        <button
          className="button is-warning is-small"
          style={buttonStyle}
          onClick={startEdittingItem}
        >
          Edit ✍️
        </button>
      </div>
      <div className="mb-3 has-background-light box">
        <p>{item}</p>
      </div>
    </div>
  )

  const Editing = () => {
    const formRef = useRef()

    const handleEditItem = (e) => {
      e.preventDefault()
      const data = new FormData(formRef.current)
      const edittedItem = data.get("item")
      editItem(item, edittedItem)
      setEditing(false)
    }

    return (
      <form onSubmit={handleEditItem} ref={formRef}>
        <input
          className="input is-primary is-inline"
          type="text"
          name="item"
          defaultValue={item}
        />
        <button className="button is-success" type="submit">
          Save Changes ✅
        </button>
      </form>
    )
  }

  return editing ? <Editing /> : <NotEditing />
}

export default Item
