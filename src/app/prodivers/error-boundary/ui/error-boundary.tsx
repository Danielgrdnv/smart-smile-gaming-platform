import React, {ErrorInfo, ReactNode, Suspense} from 'react';
import {ErrorWindow} from './error-window';

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorWindow/>
                </Suspense>
            );
        }

        return children;
    }
}

// export default ErrorBoundary;
