import bannerImage from "../assets/bannerImage.jpg";

function Banner() {
  return (
    <section className="flex items-center justify-center md:min-h-fit xl:p-20">
      <div className="flex flex-col justify-center text-center xl:flex-row">
        <div className="flex flex-col gap-4">
          <h2 className="p-2 py-3 text-5xl font-bold">
            Modern Living <br></br> for Everyone
          </h2>
          <p className="max-w-96 p-2 text-lg">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in Madrid and Barcelona more
            than 15 years.
          </p>
        </div>

        <div className="mb-10 flex max-w-7xl justify-center bg-gray-300 xl:absolute xl:mt-72">
          <form className="flex flex-col gap-6 p-4 font-normal md:p-10 xl:flex-row xl:px-10 xl:py-4">
            <select className="h-10 w-60 rounded-md p-1">
              <option value="buy">Property Types</option>
              <option value="farmHouse">Farm House</option>
              <option value="house">House</option>
            </select>

            <input
              type="text"
              placeholder="Search"
              className="h-10 w-60 rounded-md p-1"
            ></input>
            <button className="h-10 w-60 border-spacing-1 rounded-md border-2 border-sky-950 bg-sky-950 p-1 font-bold text-white transition-all hover:scale-105 hover:bg-gray-300 hover:text-sky-950 xl:w-40">
              Search
            </button>
          </form>
        </div>

        <img
          src={bannerImage}
          alt="banner"
          className="hidden max-w-96 xl:flex"
        ></img>
      </div>
    </section>
  );
}

export default Banner;
