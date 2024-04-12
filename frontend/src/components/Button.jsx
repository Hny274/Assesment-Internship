const Button = ({ title, active, setActive }) => {
  return (
    <button
      onClick={() => setActive(title)}
      className={`p-2 ${
        !active ? "bg-[#4A4646]" : "bg-[#292929]"
      }  text-white font-bold rounded-md text-xl uppercase flex-grow`}
    >
      {title}
    </button>
  );
};

export default Button;
