import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface Props {
    children: ReactNode;
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error: ', error);
        console.error('Error Info: ', errorInfo);
    }

    render() {
        if(this.state.hasError) return <h1>Oops! Something went wrong :/</h1>

        return this.props.children;
    }
}

export default ErrorBoundary;