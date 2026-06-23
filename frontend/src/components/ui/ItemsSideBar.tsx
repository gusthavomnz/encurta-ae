import { ButtonIcon } from "@radix-ui/react-icons";
import { useState, type ElementType } from "react";
import type MenuComponentButtomProps from "../LeftSideBar";

import { useNavigate } from "react-router-dom";

export function MenuComponentButtom({
  nome,
  Icon,
  redirect,
  isClicked
}: MenuComponentButtomProps) {
    const [setClicked] = useState(false)

    const navigate = useNavigate()
  return (
    <div className="w-full bg-neutral-700 p-2 hover:bg-red-600" >
       <div className={isClicked && "hover:bg-amber-300"}>
      <button className="flex flex-row items-center w-full gap-5" onClick={(e)=> navigate(redirect)}>
        <div className=" h-full">
          <Icon />
        </div>
        <div className="h-full">
          <h1 className="font-sans text-xl flex"> {nome} </h1>
        </div>
      </button>
      </div>
    </div>
  );
}
