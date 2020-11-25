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
        <div className="List">
            {props.data}
            {editMode ?
                (<>
                    <textarea
                        className="editTask"
                        onChange={editItemChanged}
                        placeholder="Edit task"
                        value={editedItem}></textarea>
                    <button className="saveTask"
                        onClick={savedItem}
                        >save task</button>
                </>
                ) : (
                    <>
                        {
                            props.data,
                        props.item
                        
                        }
                        <button className="edit"
                            onClick={() => { setEditMode(true) }}>edit</button>
                        <button className="delete"
                            onClick={() => props.deletehandler(props.idx)}>delete</button>
                    </>
                )}
        </div>
    )
}
export default ListItem;