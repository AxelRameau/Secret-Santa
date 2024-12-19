import Snowfall from "react-snowfall";
import Lutin from "../Images/lutin.png";
import Santa from "../Images/santa.png";
// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <ul className="px-7 ">
       <Snowfall/>
       <div className="flex justify-center w-[375px] relative mx-auto mb-48">
        <img className="absolute right-5" src={Lutin} alt="" />
        <img className="absolute left-5" src={Santa} alt="" />
       </div>
       <div className="items-center flex flex-col gap-1">
       <h2 className="titre text-3xl mb-5 mt-10">
        La distribution à été faite !
            </h2>
      {assignments.map((assignment, index) => (
        <li className="text-xl " key={index}>
          <span className="text-vert font-bold">{assignment.giver}</span> offre un beau cadeau à{" "}
          <span className="text-vert font-bold">{assignment.receiver}</span>
        </li>
      ))}
      </div>
    </ul>
  );
}
