import Main from "./Main";
import ErrorBoundary from "./comp/ErrorBoundary";

const MainWithErrorBoundary = () => (
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>
);

export default MainWithErrorBoundary;
