import LayoutComponent from "components/Layout";
import SpinnerComponent from "components/Spinner";
import React, { Suspense } from "react";
import { HashRouter, Route, Routes as Switch } from "react-router-dom";
const HomePage = React.lazy(() => import("pages/Home"));
const DatabasePage = React.lazy(() => import("pages/Database"));
const DashboardPage = React.lazy(() => import("pages/Dashboard"));

const Routes = () => (
  <>
    <HashRouter>
      <LayoutComponent>
        <Suspense fallback={<SpinnerComponent />}>
          <Switch>
            <Route path="/" element={<HomePage />} />
            <Route path="/database" element={<DatabasePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<div>Page not found ;(</div>} />
          </Switch>
        </Suspense>
      </LayoutComponent>
    </HashRouter>
  </>
);

export default React.memo(Routes);
