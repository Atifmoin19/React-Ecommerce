import { Box, Spinner } from "@chakra-ui/react";
import HomePage from "Pages";
import Product from "Pages/Products";
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

          <Route path="/product" element={<Product />}>
            <Route path={":id"} element={<Product />} />
            <Route path={":id/:id"} element={<Product />} />
            {/* {new Array(number).fill(1).map((item, idx) => {
              return (
                <Route
                  path={`${Array.from(
                    { length: idx + 1 },
                    (_, ss) => `:id`
                  ).join("/")}`}
                />
              );
            })} */}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
