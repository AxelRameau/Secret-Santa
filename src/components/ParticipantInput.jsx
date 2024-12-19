import Bonhomme from "../Images/bonhomme.png";
import Lutin from "../Images/lutin.png";
import Santa from "../Images/santa.png";
import Bambi from "../Images/Bambi.png";
// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";
const images = [Bonhomme, Lutin, Santa, Bambi];

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}


export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* // Champs de saisie pour ajouter un participant */}
      <section className="flex flex-col gap-2.5">
        <h2 className="titre">Choix des participants 🎄</h2>
        <div className="flex space-x-2">
        
          <input
            type="text"
            className="input border-2 border-gray-300 rounded-full py-2.5 pl-2.5 w-full text-gray-500"
            placeholder="Entrez un nom"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addParticipant()}
          />
          <button className="button border-2 border-orange bg-orange text-beige rounded-full cursor-pointer px-5" onClick={addParticipant}>
            Ajouter
          </button>
        </div>
      </section>
      {/* // Liste des participants ajoutés */}
      <h2 className="titre">Liste des participants 🎅</h2>
      <ul className="flex flex-col gap-2.5">
        {participants.map((name, index) => (
          
          <li key={index} className="flex items-center justify-between border-2 border-gray-300 rounded-full py-2 px-2.5 text-xl">
             <div className="flex items-center gap-2">
                <img src={getRandomImage()} alt="Bonhomme" className="h-10 w-10"/>
                {name}
             </div>
            <div className="space-x-2">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
