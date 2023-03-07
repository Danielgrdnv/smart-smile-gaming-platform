import React, {Suspense} from 'react';
import {Layout} from '@/widgets/layout';
import {CustomToast} from '@/widgets/toast';
import {LoginReflect} from '@/features/login';
import '@/shared/config/i18n';
import './index.scss';
import {PublicRoutes} from "./prodivers/router-provider/ui/public-routes";
import {Providers} from "./prodivers";

const App = () => {
    return (
        <Providers>
            <CustomToast/>
            <LoginReflect/>
            <Layout>
                <Suspense fallback={<h2>Loading route...</h2>}>
                    <PublicRoutes/>
                </Suspense>
            </Layout>
        </Providers>
    );
};

export default App;
