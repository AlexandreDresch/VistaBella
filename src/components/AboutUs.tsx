import aboutUs from "../assets/aboutUs.png";

function AboutUs() {
  return (
    <div className="g-10 flex min-w-full flex-col items-center justify-center xl:flex-row">
      <img
        src={aboutUs}
        alt="about us"
        className="max-w-80 md:h-96 md:min-w-fit xl:h-80 xl:min-w-max xl:pr-10"
      ></img>
      <div className="flex flex-col px-5 xl:max-w-md xl:pl-10">
        <h2 className="p-2 text-3xl font-bold xl:text-5xl">About Us</h2>
        <p className="text-md max-w-96 xl:max-w-md">
          We are a company that connects the world of real estate and finance.
          We provide a complete service for the sale, purchase or rental of real
          estate. Our advantage is more than 15 years of experience and soil in
          attractive locations in Slovakia with branches in Bratislava and
          Košice.<br></br>
          We have a connection to all banks on the Slovak market, so we can
          solve everything under one roof. By constantly innovating our business
          activities, we move forward and we are able to offer truly
          above-standard services that set us apart from the competition.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
