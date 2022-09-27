import Boxs from "./Boxs";

const Result = (props) => {
  const boxes = props.movies.map((item, index) => {
    return (
      <Boxs
        key={index}
        image={item.poster_path}
        title={item.original_title}
        rating={item.vote_average}
      />
    );
  });
  return (
    <div className="w-full grid md:grid-cols-4 sm:grid-cols-2  gap-5">
      {boxes}
    </div>
  );
};

<Boxs />;
export default Result;
