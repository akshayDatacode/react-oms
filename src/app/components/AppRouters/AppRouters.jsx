import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import CustomLoader from "../../../components/SharedComponents/CustomLoader";

const Blog = lazy(() => import('../../../components/pages/Blog'))
const Home = lazy(() => import("../../../components/pages/Home"))
const Process = lazy(() => import("../../../components/pages/Process"))
const Aboutus = lazy(() => import("../../../components/pages/Aboutus"))
const Contact = lazy(() => import("../../../components/pages/Contact"))

const AppRouters = () => {

  return (
    <>
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/process" element={<Process />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route path="*" component={NotFound} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default AppRouters;
