import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
    const [editedItem, setEditedItem] = useState(props.item);
    const [editMode, setEditMode] = useState(false);

    const editItemChanged = (evt) => {
        setEditedItem(evt.target.value);

    };
    const savededitItem = (editedValue, itemiIdx) => {
        props.edithandler(editedItem, props.idx)
        setEditMode(false);
    }
    return (
        <div className="List">
            {editMode ?
                (<>
                    <textarea
                        className="editTask"
                        onChange={editItemChanged}
                        placeholder="Edit task"
                        value={editedItem}></textarea>
                    <button className="saveTask"
                        onClick={savededitItem}
                        >save task</button>
                </>
                ) : (
                    <>
                        {props.item}
                        <button className="edit"
                            onClick={() => { setEditMode(true) }}>edit</button>
                        <button className="delete"
                            onClick={() => props.deletehandler(props.idx)}>delete</button>
                    </>
                )}
        </div>
    )
}