import CommonHeader from "@/Components/Lv2/CommonHeader";
import ShowTodoList from "@/Components/Lv3/ShowTodoList";
import React from "react";

const ShowTodoListLayouts: React.FC = () => {
    return (
        <>
            <CommonHeader />
            <ShowTodoList />
        </>
    );
};

export default ShowTodoListLayouts;
