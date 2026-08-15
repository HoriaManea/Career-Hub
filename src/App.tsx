import { useState, type FormEvent } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Jobs from "./pages/Jobs";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import Pages from "./pages/pages";

type DataForm = {
  name: string;
  password: string;
};

function AppTwo() {
  const [form, setForm] = useState<DataForm>({
    name: "",
    password: "",
  });

  const debouncedForm = useDebounce(form, 500);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  console.log("Debounced:", debouncedForm);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="explore" element={<Explore />} />
          <Route path="category" element={<Category />} />
          <Route path="pages" element={<Pages />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppTwo;
