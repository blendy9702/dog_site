export default function Button({ label, onClick }) {
  const base_style_button = "p-4 font-bold rounded";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-grey-500 text-white hover:bg-grey-700",
    danger: "bg-red-500 text-white hover:bg-red-700",
  };
  return (
    <button
      className={`${base_style_button} ${variants["primary"]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
