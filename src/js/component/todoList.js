import React, { useState } from "react";

//import components
import { Horizontal } from "./horizontal.js";
import { Counter } from "./counter.js";

//create your first component
export function Todo() {
	const [toDo, setToDo] = useState([]);

	// blank input constraint
	const newDo = event => {
		if (event.key === "Enter" && event.target.value === "") {
			// prevent from blank inputs
			alert("Blank inputs not allowed");
		} else if (event.key === "Enter") {
			// await for the enter Key to be pressed
			event.preventDefault();
			setToDo(toDo.concat(event.target.value));
			event.target.value = ""; // clear the input box
		}
	};
	// remove to do
	const removeDo = toRemove => {
		const updatedArray = toDo.filter((item, index) => index !== toRemove);
		setToDo(updatedArray);
	};

	return (
		<div>
			<Horizontal />
			<ul className="list-group m-5">
				<input
					type="text"
					placeholder="Enter to do..."
					onKeyDown={newDo}
				/>
				{toDo.map((doItem, index) => (
					<li key={index} className="list-group-item text-left">
						{doItem}
						<i
							className="fas fa-trash-alt pl-5"
							onClick={() => removeDo(index)}></i>
					</li>
				))}
			</ul>
			<Horizontal />
			<Counter items={toDo.length} />
		</div>
	);
}
