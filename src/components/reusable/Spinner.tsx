export default function Spinner() {
  return (
    <div className=" flex justify-center h-50 items-center">
      <div
        className={`animate-spin rounded-full border-solid border-current border-t-transparent text-primary h-8 w-8 border-2 `}
      ></div>
    </div>
  );
}
