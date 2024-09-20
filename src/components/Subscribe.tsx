import newsletterIcon from "../assets/newsletter/newsletterIcon.png";

function Subscribe() {
  return (
    <div
      className="fixed bottom-20 flex w-full items-center justify-center gap-8 bg-gray-300 p-4 font-bold md:px-32"
      style={{ transition: "transform 0.3s ease" }}
    >
      <div className="absolute left-0 z-50 flex w-full transform flex-col items-center transition-transform">
        <div className="flex flex-col gap-2">
          <h2>Subscribe to newsletter</h2>
          <p className="font-normal">
            Get the latest news and interesting offers and real estate
          </p>
        </div>

        <form className="flex gap-6 p-4 font-normal">
          <input
            type="email"
            placeholder="Your email"
            className="w-50 h-10 rounded-md p-1"
          ></input>
          <button className="h-10 rounded-md border-2 border-sky-950 p-1 font-semibold text-sky-950">
            Subscribe
          </button>
        </form>
      </div>

      <img
        src={newsletterIcon}
        alt="newsletter icon"
        className="w-100 z-0"
      ></img>
    </div>
  );
}

export default Subscribe;
