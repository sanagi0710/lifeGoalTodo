import "../css/app.css";

// window.axios = axios;
// グローバルに設定しているのは問題ないですが、プロジェクト全体でAxiosをグローバルに使う必要があるか確認してください。最近のプロジェクトでは、各コンポーネントでAxiosを個別にインポートして使うことが一般的です。

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoFormLayouts from "./Layouts/TodoLayouts";
import MyPageLayouts from "./Layouts/MyPageLayouts";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<TodoFormLayouts />} />
                    <Route path="/mypage" element={<MyPageLayouts />} />
                </Routes>
            </div>
        </Router>
    );
};

const container = document.getElementById("app");
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
