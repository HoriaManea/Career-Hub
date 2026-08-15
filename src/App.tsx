import { useState, type FormEvent } from "react";
import { useDebounce } from "./hooks/useDebounce";
import Input from "./components/layout/Input";

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
    <>
      <form onSubmit={handleSubmit} className="innerDiv">
        <Input
          value={form.name}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
        />
        <Input
          value={form.password}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, password: value }))
          }
          type="password"
        />
        <button type="submit" className="formInput">
          Submit
        </button>
      </form>
      <h1>{debouncedForm.name}</h1>
      <h1>{debouncedForm.password}</h1>
    </>
  );
}

export default AppTwo;
