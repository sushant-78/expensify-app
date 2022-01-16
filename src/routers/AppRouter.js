import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpensifyDashboard from "../components/ExpensifyDashboard";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";

import NoPageFound from "../components/NoPageFound";
import Header from "../components/Header";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<ExpensifyDashboard />} />
                    <Route path="/create" element={<AddExpensePage />} />
                    <Route path="/edit/:id" element={<EditExpensePage />} />
                    <Route element={<NoPageFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
