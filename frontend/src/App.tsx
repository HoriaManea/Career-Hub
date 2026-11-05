import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Register from "./pages/Register";
import Layout from "./components/layout/Layout";
import Test from "./pages/Test";

function AppTwo() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="explore" element={<Explore />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="account" element={<Account />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppTwo;
