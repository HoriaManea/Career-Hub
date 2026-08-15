import { useState, type FormEvent } from "react";
import { useDebounce } from "./hooks/useDebounce";
import Input from "./components/layout/Input";
import Navigation from "./components/ui/Navigation";

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

  return <Navigation />;
}

export default AppTwo;
