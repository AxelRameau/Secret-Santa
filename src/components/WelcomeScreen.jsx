import coverImage from "../Images/Screen_mobile_cover.svg";
import Snowfall from "react-snowfall";
// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="w-screen h-screen text-center">
      <div className="w-full h-2/3">
        <Snowfall/>
        <img className="h-full w-full object-cover" src={coverImage} alt="" />
      </div>

      <div className="flex flex-col gap-5 items-center h-full py-10 px-2.5">
        <section className="flex flex-col gap-2.5">
          <h1 className="text-4xl font-bold text-primary text-bleu">Secret Santa</h1>
          <p className="text-lg text-marron">
            C’est enfin l’heure de s’offrir des cadeaux, mais à qui les offrent-ont ?
          </p>
        </section>
        <button onClick={onStart} className="button text-lg py-5 px-20 bg-orange text-beige rounded-full w-fit font-semibold hover:bg-orange/80 hover:cursor-pointer">
          C’est parti
        </button>
      </div>
    </div>
  );
}
