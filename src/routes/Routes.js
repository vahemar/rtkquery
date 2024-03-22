import { Route, Routes } from "react-router-dom";
import { config } from "../pages/config";
import React from 'react';

const RoutesProviders = () => {
    return (
        <Routes>
            {
                config.map(({element, path, Layout}, idx) => (
                    <Route key={idx} element={<Layout>{element}</Layout>} path={path} />
                ))
            }
        </Routes>
    );
}

export default RoutesProviders;
