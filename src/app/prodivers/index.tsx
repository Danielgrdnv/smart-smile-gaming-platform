import {ErrorBoundary} from "./error-boundary/index";
import {RouterProvider} from "./router-provider/index";
import {ReactNode} from "react";

interface IProvidersProps {
    className?: string
    children: ReactNode
}

export const Providers = (props: IProvidersProps) => {
    const {className, children} = props;

    return (
        <ErrorBoundary>
            <RouterProvider>
                {children}
            </RouterProvider>
        </ErrorBoundary>
    );
};