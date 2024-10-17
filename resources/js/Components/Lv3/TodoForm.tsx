import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../Lv1/ButtonAtom";

const TodoForm: React.FC = () => {
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/todo", { content });
            setMessage("Item added successfully");
            setContent("");
            navigate("/show");
        } catch (error) {
            setMessage("Failed to add item");
        }
    };
    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                lifiGoalTodo
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" visual="primary">
                    目標を送信
                </Button>
            </form>
            {message && (
                <Typography variant="body2" color="textSecondary">
                    {message}
                </Typography>
            )}
        </Box>
    );
};

export default TodoForm;
