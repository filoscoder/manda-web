// Imports
import React, { Suspense } from "react";
// App imports
import PageLayout from "./components/common/PageLayout";
import Loading from "./components/common/Loading";
import ErrorBoundary from "./components/common/ErrorBoundary";
// Import ant-design
import "antd/dist/antd.css";

const Router = React.lazy(() => import("./router"));
// Component
const App = () => (
  <PageLayout pageTheme={"dark"}>
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </Suspense>
  </PageLayout>
);

export default App;
