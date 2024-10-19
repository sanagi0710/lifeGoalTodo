import CommonHeader from "@/Components/Lv2/CommonHeader";
import ShowTodoList from "@/Components/Lv3/ShowTodoList";
import TodoForm from "@/Components/Lv3/TodoForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowTodoListLayouts: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number; content: string }[]>([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("/api/todo");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            <CommonHeader />
            <TodoForm onTodoAdded={fetchTodos} />
            <ShowTodoList todos={todos} />
        </>
    );
};

export default ShowTodoListLayouts;
