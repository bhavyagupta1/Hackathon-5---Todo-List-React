import React, { useState } from "react";
import ListItem from "./ListItem";
import "./../styles/App.css";

function App() {

	const [items, setItems] = useState([]);
	const [newItem, setnewItem] = useState("");
	const addItem = () => {

		items.push(newItem);
		setItems([...items]);
		setnewItem("");
	}
	const newItemChanged = (evt) => {
		//console.log(evt.target.value);
		setnewItem(evt.target.value);
	};
	const deletehandeler = (itemIdx) => {
		items.splice(itemIdx, 1);
		setItems([...items]);

	};
	const edithandler = (editedValue, itemIdx) => {
		items[itemIdx] = editedValue;
		setItems([...items]);
	};
	return (
		<div id="main">
			<textarea id="task"
				onChange={newItemChanged} placeholder="Item"
				value={newItem}></textarea>
			<button id="btn"
				onClick={addItem} 
				disabled={newItem.trim().length ===0}>Add Item</button>
			{
			
                

				items.map((item, idx) => (
					
					<ListItem
					    
						item={item}
						
						key={`${item} _${idx}`}
						idx={idx}
						edithandler={edithandler} deletehandeler={deletehandeler}/>
				)
				)

			}
		</div>
	)

}

export default App;
