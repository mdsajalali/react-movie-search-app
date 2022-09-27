const Boxs = ({ image, title, rating }) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="shadow min-h-[200px] mt-3 pb-1">
      <img src={IMGPATH + image} alt="" className="w-full" />
      <div className="flex justify-between px-2 items-center">
        <span className="text-2xl">{title}</span>
        <span className="text-xl text-yellow-500 font-bold">{rating}</span>
      </div>
    </div>
  );
};

export default Boxs;
