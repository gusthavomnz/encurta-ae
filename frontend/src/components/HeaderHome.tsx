import CardEncurtador from "./CardEncurtador";

function HeaderHome() {
  return (
    <div className="w-full h-full relative flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-[#940600] via-[#700500] to-[#520400]">
      <div className="w-full h-full flex justify-center items-center mt-30 mb-30">
        <CardEncurtador />
      </div>
    </div>
  );
}

export default HeaderHome;