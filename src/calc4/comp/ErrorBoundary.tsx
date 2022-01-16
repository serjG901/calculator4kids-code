import { Component, ErrorInfo, ReactNode } from "react";
import Error from "./atom/Error";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      console.log("render fallback ui");
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
