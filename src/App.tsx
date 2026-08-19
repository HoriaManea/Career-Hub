import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Jobs from "./pages/Jobs";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import Pages from "./pages/Pages";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";

function AppTwo() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="explore" element={<Explore />} />
          <Route path="category" element={<Category />} />
          <Route path="pages" element={<Pages />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppTwo;
