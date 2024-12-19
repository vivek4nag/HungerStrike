const Middle = () => {
  return (
    <div className="flex gap-8 items-center p-8 flex-col md:flex-row">
      <div className="md:w-1/2 ">
        <img
          src="https://czechtheworld.com/wp-content/uploads/2020/12/Best-Food-Blog-Names-6.jpg"
          alt=""
          className="rounded-3xl cursor-pointer"
        />
      </div>

      <div className="md:w-1/2 space-y-4 bg-slate-100 md:py-16 py-6 px-4 rounded-xl shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button className="bg-purple-600 text-white text-base md:text-2xl font-semibold px-4 py-2 rounded-lg hover:bg-purple-900 hover:cursor-pointer  transition-all duration-300 hover:shadow-2xl">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Middle;
