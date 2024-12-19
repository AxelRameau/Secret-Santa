
import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";
import Fond from "/Arrondi.png";

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="container bg-beige text-marron">
      <div>
        {/* // affiche l'écran en fonction de l'état de l'application // WELCOME */}
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        {/* // INPUT */}
        {currentScreen === "input" && (
          <div className="h-screen w-screen flex flex-col justify-between pt-7 py-12 px-7 items-center">
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <div className="mt-6">
              <button className="button" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button>
            </div>
          </div>
        )}
        {/* // ASSIGNMENTS */}
        {currentScreen === "assignments" && (
          <div className="flex flex-col gap-10 w-screen h-screen text-center">
            <img className="h-1/3 w-full" src={Fond} alt="" />
            <AssignmentDisplay assignments={assignments} />

            <div className="mx-auto">
              <button className="button" onClick={resetApp}>
                Recommencer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
