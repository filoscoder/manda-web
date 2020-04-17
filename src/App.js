// Imports
import React, { Suspense } from "react";
// App imports
import PageLayout from "./components/common/PageLayout";
import Loading from "./components/common/Loading";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { PriorityColorProvider } from "./const/theme";
// Import ant-design
import "antd/dist/antd.css";

const Router = React.lazy(() => import("./setup/router"));
// Component
const App = () => (
  <Suspense fallback={<Loading />}>
    <ErrorBoundary>
      <PriorityColorProvider>
        <PageLayout pageTheme={"dark"}>
          <Router />
        </PageLayout>
      </PriorityColorProvider>
    </ErrorBoundary>
  </Suspense>
);

export default App;
