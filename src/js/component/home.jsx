import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {	
	const arraySSD = JSON.parse(localStorage.getItem("ToDoList"))
	
	const [list, setList] = useState([...arraySSD])
	
	function enterPressed (event) {
		if (event.keyCode === 13){
			setList((prevArray)=> {
				return [...prevArray, event.target.value]
			})
		}
		localStorage.setItem("ToDoList", list?.length > 0 && JSON.stringify([list]));
	}
	
	
	return (
		<div>
			<h1>TODO</h1>
			<div>
				<input type="text" onKeyDown={enterPressed} />
				<ul>
				{list?.length>0 && list.map((item, algo)=>{
					console.log(algo);
					return <li>{item}</li>
				})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
