import { Box, Spinner } from "@chakra-ui/react";
import HomePage from "Pages";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Suspense
      fallback={
        <Box
          height="100vh"
          width="100%"
          display="flex"
          bg={"#fff"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Spinner />
        </Box>
      }
    >
      <Routes>
        <Route path="">
          <Route path="" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
