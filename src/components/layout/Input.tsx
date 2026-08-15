type InputProps = {
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password";
};

export default function Input({ value, onChange, type = "text" }: InputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      className="formInput"
    />
  );
}
