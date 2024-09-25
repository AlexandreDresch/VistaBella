import bannerImage from "../assets/bannerImage.jpg";

function Banner() {
  return (
    <section className="h-lvh p-10">
      <div className="flex justify-center gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="p-2 text-7xl font-bold">
            Modern Living <br></br> for Everyone
          </h2>
          <p className="max-w-96 p-2 text-lg">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in Madrid and Barcelona more
            than 15 years.
          </p>
        </div>

        <div className="absolute mt-72 max-w-7xl bg-gray-300">
          <form className="flex gap-6 p-4 font-normal">
            <select className="w-50 h-10 rounded-md p-1">
              <option value="buy">Property Types</option>
              <option value="farmHouse">Farm House</option>
              <option value="house">House</option>
            </select>

            <input
              type="text"
              placeholder="Search"
              className="w-50 h-10 rounded-md p-1"
            ></input>
            <button className="h-10 rounded-md bg-sky-950 p-1 font-semibold text-white">
              Search
            </button>
          </form>
        </div>

        <img src={bannerImage} alt="banner" className="max-w-lg"></img>
      </div>
    </section>
  );
}

export default Banner;
