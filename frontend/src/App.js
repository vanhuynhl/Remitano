import React from "react";
import {
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import "antd/dist/antd.min.css";
import { Layout } from 'antd';
import Header from "./Layout/Components/CustomHeader";
import ErrorPage from "./Layout/ErrorPage";
import RegisterPage from "./features/Register/RegisterPage";
import HomePage from './features/Home/HomePage'

export default function BasicExample() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

function MainLayout() {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header/>
            <Layout.Content style={{paddingTop: "14px"}}>
                <Outlet />
            </Layout.Content>
            <Layout.Footer>
                FOOTER
            </Layout.Footer>
        </Layout>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
