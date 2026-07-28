import { Component, ErrorInfo, ReactNode } from "react";
import ServiceUnavailable from "@/pages/ServiceUnavailable";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Приложение упало с ошибкой:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ServiceUnavailable />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
