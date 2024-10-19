import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    TextField,
} from "@mui/material";
import Button from "../Lv1/ButtonAtom";

interface ShowTodoListProps {
    todos: { id: number; content: string }[];
}

const ShowTodoList: React.FC<ShowTodoListProps> = ({ todos }) => {
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
    const [newContent, setNewContent] = useState("");

    const deleteList = async (id: number) => {
        try {
            await axios.delete(`/api/todo/${id}`);
        } catch (error) {
            console.error("削除失敗", error);
        }
    };

    const updateTodo = async (id: number) => {
        try {
            const response = await axios.put(`/api/todo/${id}`, {
                content: newContent,
            });
            console.log("Updated Todo:", response.data);
            setEditingTodoId(null);
            setNewContent("");
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Item List
            </Typography>
            <List>
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        sx={{ border: "2px solid #ccc", alignItems: "center" }}
                    >
                        <ListItemText primary={`ID: ${todo.id}`} />
                        {editingTodoId === todo.id ? (
                            <>
                                <TextField
                                    variant="outlined"
                                    value={newContent}
                                    onChange={(e) =>
                                        setNewContent(e.target.value)
                                    }
                                    placeholder="新しい内容を入力"
                                    size="small"
                                />
                                <Button
                                    type="button"
                                    visual="primary"
                                    size="medium"
                                    onClick={() => updateTodo(todo.id)}
                                >
                                    更新
                                </Button>
                                <Button
                                    type="button"
                                    visual="secondary"
                                    size="medium"
                                    onClick={() => setEditingTodoId(null)}
                                >
                                    キャンセル
                                </Button>
                            </>
                        ) : (
                            <>
                                <ListItemText primary={todo.content} />
                                <Button
                                    type="button"
                                    visual="primary"
                                    size="medium"
                                    onClick={() => {
                                        setEditingTodoId(todo.id);
                                        setNewContent(todo.content);
                                    }}
                                >
                                    変更
                                </Button>
                                <Button
                                    type="button"
                                    visual="alert"
                                    size="medium"
                                    onClick={() => deleteList(todo.id)}
                                >
                                    削除
                                </Button>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ShowTodoList;
