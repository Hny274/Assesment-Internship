import { RiCheckLine } from "react-icons/ri";

const ImageList = ({ image, list }) => {
  return (
    <div className="w-full flex justify-center items-start mx-auto gap-5">
      <img src={image} alt="" className="w-[50%] aspect-square object-cover" />
      <ul className="w-[50%] pl-10">
        {list &&
          list.map((item, index) => {
            return (
              <li key={index} className="flex items-center mb-6">
                <span className="bg-[#76E187] p-[6px] rounded-xl mr-4">
                  <RiCheckLine className="text-white text-2xl" />
                </span>
                <span className="text-xl font-medium">{item}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageList;
