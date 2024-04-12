const ImageText = ({ image, description }) => {
  return (
    <div className="w-full flex justify-center text-justify items-start mx-auto gap-5">
      <img src={image} alt="" className="w-[45%]" />
      <p>{description}</p>
    </div>
  );
};

export default ImageText;
