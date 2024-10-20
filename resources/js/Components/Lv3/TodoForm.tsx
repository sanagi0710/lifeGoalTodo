import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import Button from "../Lv1/ButtonAtom";

interface TodoFormProps {
    onAddTodo: (content: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim() === "") {
            setMessage("内容を入力してください");
            return;
        }

        // 親コンポーネントのonAddTodo関数を呼び出す
        onAddTodo(content);
        setMessage(content + "を追加しました");
        setContent("");
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                やりたいことリスト
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="入力してください"
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
