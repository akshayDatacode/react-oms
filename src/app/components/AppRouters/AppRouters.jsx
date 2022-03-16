import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import CustomLoader from "../../../components/SharedComponents/CustomLoader";

const Blog = lazy(() => import('../../../components/pages/blog'))
const Home = lazy(() => import("../../../components/pages/home"))

const AppRouters = () => {

  return (
    <>
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          {/* <Route path="*" component={NotFound} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default AppRouters;
