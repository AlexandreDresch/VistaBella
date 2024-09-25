import aboutUs from "../assets/aboutUs.png";

function AboutUs() {
  return (
    <div className="flex justify-center gap-20">
      <img src={aboutUs} alt="about us" className="max-w-xl"></img>
      <div className="flex flex-col">
        <h2 className="p-5 text-5xl font-bold">About Us</h2>
        <p className="max-w-80">
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
