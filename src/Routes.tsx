import { Box, Spinner } from "@chakra-ui/react";
import HomePage from "Pages";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="">
        <Route path="" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
