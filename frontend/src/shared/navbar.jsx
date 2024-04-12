const Navbar = () => {
  return (
    <section className="shadow-md py-1">
      <ul className="w-full flex justify-end">
        <li className="mx-4 p-3 font-medium cursor-pointer">Home</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Companies</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Projects</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Property</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Contact Us</li>
      </ul>
    </section>
  );
};

export default Navbar;
