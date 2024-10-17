import CommonHeader from "@/Components/Lv2/CommonHeader";
import ShowTodoList from "@/Components/Lv3/ShowTodoList";
import TodoForm from "@/Components/Lv3/TodoForm";
import React from "react";

const ShowTodoListLayouts: React.FC = () => {
    return (
        <>
            <CommonHeader />
            <TodoForm />
            <ShowTodoList />
        </>
    );
};

export default ShowTodoListLayouts;
