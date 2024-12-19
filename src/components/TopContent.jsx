const TopContent = () => {
  return (
    <div className="absolute mt-64 md:pl-24 pl-8 ">
      <div className="">
        <h1 className="text-black font-extrabold md:text-6xl text-3xl">
          Let us find your
        </h1>
        <h2 className="font-extrabold md:text-6xl text-3xl text-red-700 italic">
          Forever Food...
        </h2>
        <p className="hidden md:block md:text-xl pt-5 text-sky-500 font-extrabold max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </div>

      <div className="pt-8 flex md:gap-6 gap-2">
        <button className="bg-red-600 text-white md:text-2xl text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-800 hover:cursor-pointer transition-all duration-300">
          Search Now
        </button>
        <button className="bg-green-600 text-white md:text-2xl text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-800 hover:cursor-pointer transition-all duration-300">
          Know More
        </button>
      </div>
    </div>
  );
};

export default TopContent;
