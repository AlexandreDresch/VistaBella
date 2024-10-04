import { ourTeamMockData } from "../constants/our-team";

function OurTeam() {
  return (
    <div className="m-auto w-3/4">
      <h1>Our Team </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {ourTeamMockData.map((teamMember) => {
          return (
            <div
              className="flex w-72 justify-center pb-10 text-center"
              key={teamMember.id}
            >
              <div className="rounded-md p-6 shadow-md">
                <img
                  src={teamMember.images[0]}
                  alt={teamMember.name}
                  className="h-40 w-40 rounded-full"
                />
                <h2 className="p-1 font-semibold">{teamMember.name}</h2>
                <p className="p-1">{teamMember.position.join(", ")}</p>{" "}
                {/* Use join() se position for um array */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
