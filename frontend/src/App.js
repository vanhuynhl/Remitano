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
import MoviePage from './features/Movie/MoviePage'

export default function BasicExample() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="movie" element={<MoviePage />} />
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
