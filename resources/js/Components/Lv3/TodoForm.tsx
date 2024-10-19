import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Typography } from "@mui/material";
import Button from "../Lv1/ButtonAtom";

const TodoForm: React.FC<{ onTodoAdded: () => void }> = ({ onTodoAdded }) => {
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/todo", { content });
            setMessage(content + "を追加しました");
            setContent("");
            console.log(onTodoAdded());
            onTodoAdded();
        } catch (error) {
            setMessage("Failed to add item");
        }
    };
    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                やりたいことリスト
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
                <Button type="submit" visual="primary" size="medium">
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
