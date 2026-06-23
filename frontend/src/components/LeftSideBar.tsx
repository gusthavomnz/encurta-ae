import { MenuComponentButtom } from "./ui/ItemsSideBar";
import { StarIcon } from "@radix-ui/react-icons";
import { ElementType } from "react";
import {
  PersonIcon,
  GearIcon,
  LayersIcon,
  HomeIcon,
  BarChartIcon,
} from "@radix-ui/react-icons";

interface MenuComponentButtomProps {
  nome: string;
  Icon: ElementType;
  redirect: string;
  isClicked: boolean;
}

export function LeftMenu() {
  const menuItems: MenuComponentButtomProps[] = [
    { nome: "Home Page", Icon: HomeIcon, redirect: "/home", isClicked: false },
    {
      nome: "Meus Links",
      Icon: LayersIcon,
      redirect: "/meus-links",
      isClicked: false,
    },
    {
      nome: "Links em Bio",
      Icon: StarIcon,
      redirect: "/links-bio",
      isClicked: false,
    },
    {
      nome: "Estatisticas",
      Icon: BarChartIcon,
      redirect: "/estatisticas",
      isClicked: false,
    },
  ];

  return (
    <div className="md:h-full  md:w-1/8 h-1/12 w-full bg-white z-1 top-0 left-0 p-2 overflow-hidden border-r-2 border-gray-700 shrink-0">
      <div className="w-full flex flex-col items-center mt-10 mb-10">
        <h1 className="text-4xl text-slate-800 font-bold Space Grotesk">
          {" "}
          Encurta Aê
        </h1>
        <span> by Gusthavo Menezes</span>
      </div>

      <div className="w-full h-0.5 bg-neutral-900/30 mt-2 mb-2"></div>

      <div>
        {menuItems.map((item, index) => (
          <MenuComponentButtom
            key={index}
            nome={item.nome}
            Icon={item.Icon}
            redirect={item.redirect}
            isClicked={item.isClicked}
          />
        ))}
      </div>

      <div className="w-full h-0.5 bg-neutral-900/30 mt-2 mb-2"></div>

      <div className=" absolute flex flex-col w-full gap-2 font-sans text-xl flex mb-8 p-2">
        <div className="flex flex-row gap-2 items-center">
          <PersonIcon />
          <h1> José Gusthavo </h1>
        </div>

        <div className="flex flex-row gap-2 items-center ">
          <GearIcon />
          <h1> Configurações </h1>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
