import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Button from "../Lv1/ButtonAtom";
const ShowTodoList: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number; content: string }[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get("/api/todo");
                console.log(response.data);
                setTodos(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);
    if (loading) {
        return <Typography>Loading...</Typography>;
    }
    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Item List
            </Typography>
            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id} sx={{ border: "2px solid #ccc" }}>
                        <ListItemText primary={`ID: ${todo.id}`} />
                        <ListItemText primary={todo.content} />
                        <Button>変更</Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ShowTodoList;
