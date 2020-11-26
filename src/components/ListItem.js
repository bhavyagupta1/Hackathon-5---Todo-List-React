import React, { useState } from "react";
import App from './App.js'
import "./../styles/App.css";

function ListItem(props) {
    const [editedItem, setEditedItem] = useState(props.item);
    const [editMode, setEditMode] = useState(false);

    const editItemChanged = (evt) => {
        setEditedItem(evt.target.value);

    };
    const savedItem = (editedValue, itemIdx) => {
        props.edithandler(editedItem, props.idx)
        setEditMode(false);
    }
    return (
        <div className="list">

            {editMode ?
                (<>
                    <textarea
                        className="editTask"
                        onChange={editItemChanged}
                        placeholder="Edit task"
                        value={editedItem}></textarea>
                    <button className="saveTask"
                        onClick={savedItem}
                        disabled={editedItem.trim().length ===0}>save task</button>
                </>
                ) : (
                    <>
                        {
                            props.item

                        }
                        <button className="edit"
                            onClick={() => { setEditMode(true) }}>edit</button>
                        <button className="delete"
                            onClick={() => props.deletehandeler(props.idx)}>delete</button>
                    </>
                )}
        </div>
    )
}
export default ListItem;