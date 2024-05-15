import React, { useState } from "react";
import './TodoStyles.css';

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const handleAddTodo = async () => {
        // Send POST request to add todo
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (response.ok) {
                // Reset input values after successfully adding todo
                setTitle("");
                setDescription("");
                alert("Todo added");
            } else {
                throw new Error("Failed to add todo");
            }
        } catch (error) {
            console.error("Error adding todo:", error);
            alert("Failed to add todo. Please try again.");
        }
    };

    return (
        <div className="box">
            <input
                className="inputbox"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                className="inputbox"
                id="desc"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button className="addtodo" onClick={handleAddTodo}>
                Add a todo
            </button>
        </div>
    );
}