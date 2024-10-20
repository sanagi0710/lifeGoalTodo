import CommonHeader from "@/Components/Lv2/CommonHeader";
import ShowTodoList from "@/Components/Lv3/ShowTodoList";
import TodoForm from "@/Components/Lv3/TodoForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoLayouts: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number; content: string }[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    // Todoリストの取得
    const fetchTodos = async () => {
        try {
            const response = await axios.get("/api/todo");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
            setErrorMessage("Todoリストの取得に失敗しました");
        }
    };

    // Todoリストの追加
    const addTodo = async (content: string) => {
        try {
            await axios.post("/api/todo", { content });
            fetchTodos(); // 追加後に再取得
        } catch (error) {
            console.error("Error adding todo:", error);
            setErrorMessage("Todoの追加に失敗しました");
        }
    };

    // Todoリストの削除
    const deleteTodo = async (id: number) => {
        try {
            await axios.delete(`/api/todo/${id}`);
            fetchTodos(); // 削除後に再取得
        } catch (error) {
            console.error("Error deleting todo:", error);
            setErrorMessage("Todoの削除に失敗しました");
        }
    };

    // Todoリストの更新
    const updateTodo = async (id: number, newContent: string) => {
        try {
            await axios.put(`/api/todo/${id}`, { content: newContent });
            fetchTodos(); // 更新後に再取得
        } catch (error) {
            console.error("Error updating todo:", error);
            setErrorMessage("Todoの更新に失敗しました");
        }
    };

    useEffect(() => {
        // 初回ロード時にTodoリストを取得
        fetchTodos();
    }, []);

    return (
        <>
            <CommonHeader />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <TodoForm onAddTodo={(content) => addTodo(content)} />
            <ShowTodoList
                todos={todos}
                onDeleteTodo={deleteTodo}
                onUpdateTodo={updateTodo}
            />
        </>
    );
};

export default TodoLayouts;
