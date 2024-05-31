import React from "react";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {	
	//localStorage.setItem("ToDoList", JSON.stringify(["HOLA", "ADIOS"]));
	
	//const arraySSD = JSON.parse(localStorage.getItem("ToDoList"))

	const [list, setList] = useState([])
	const [finalMessage, setFinalMessage] = useState("No tasks, add a task")
	
	function enterPressed (event) {
		if (event.keyCode === 13 && event.target.value !== ""){
			const newValue = event.target.value //needed because setList go slow lmao
			const listLength = list.length + 1
			
			setList((prevArray)=> {
				return [...prevArray, newValue]
			})

			localStorage.setItem("ToDoList", JSON.stringify(list));
			
			setFinalMessage(()=>{
				if (listLength != 0){
					return (`${listLength} items left`)
				} else {
					return ("No tasks, add a task")
				}
			})
					
			event.target.value = ""
		}
	}

	function removeTask (index) {
		const id = index
		if (id > -1) { // only splice array when item is found

			const listLength = list.length - 1

			setList((prevArray)=> {
				prevArray.splice(id, 1)
				return [...prevArray]
			})

			setFinalMessage(()=>{
				if (listLength != 0){
					return (`${listLength} items left`)
				} else {
					return ("No tasks, add a task")
				}
			})
		}
	}
	
	return (
		<div className="container d-flex justify-content-center align-items-center flex-column p-5 border-rounded">
			<h1 className="display-1 mb-5">todos</h1>
			<div className="w-100">
				<input className="w-100 input-group-text" type="text" onKeyDown={enterPressed} />
				<ul className="list-group mt-5">
				{list.map((item, index)=>{
					return <li key={index} id={index} className="list-group-item justify-content-between d-flex liColor">{item}<button className="closeButton rounded-3" type="button" onClick={()=>removeTask(index)}><strong>x</strong></button></li>
				})}
				<li className="list-group-item liColor">{finalMessage}</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
