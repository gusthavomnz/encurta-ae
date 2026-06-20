import imagemHero from "../assets/hero-section.png"
import CardEncurtador from "./CardEncurtador";

function HeaderHome() {
  return (
    <div className="w-full h-full relative flex flex-col md:flex-row overflow-hidden ">
      <div className="absolute top-[-15%] left-[10%] w-[500px] h-[500px] bg-mist-900/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[5%] w-[600px] h-[600px] bg-mist-800/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full h-full md:w-1/3 md:h-full flex justify-center items-center shrink-0 ">
        <img
          src={imagemHero}
          alt="Icon"
          className="h-full w-full object-contain "
        />
      </div>

      <CardEncurtador />
    </div>
  );
}

export default HeaderHome;
