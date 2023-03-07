import React, {Suspense} from 'react';
import { Route, Routes} from 'react-router-dom';
import {ROUTES} from "../config/config";
import {RouteProps} from "react-router";

export const PublicRoutes = ({...props}: RouteProps) => (
    <Suspense fallback={'Loading...'}>
        <Routes>
            {ROUTES.map((item) =>
                <React.Fragment key={`route-${item.langKey}`}>
                    <Route
                        {...props}
                        path={item.to}
                        element={
                            item.component
                            // isAuth
                            //     ? item.component
                            //     : <Navigate to="/login" state={{from: window.location}} replace/>
                        }
                    />
                </React.Fragment>
            )}
        </Routes>
    </Suspense>
);
