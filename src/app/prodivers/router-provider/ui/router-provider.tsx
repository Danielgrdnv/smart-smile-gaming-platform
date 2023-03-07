import React, {ReactNode, Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';

interface IRouterProvider {
    children: ReactNode
}

export const RouterProvider = ({children}: IRouterProvider) => (
    <BrowserRouter>{children}</BrowserRouter>
);
