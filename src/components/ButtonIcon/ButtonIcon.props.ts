import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { UpIcon as up } from "../../helpers/icons/UpIcon";
import { CloseIcon as close } from "../../helpers/icons/CloseIcon";
import { MenuIcon as menu } from "../../helpers/icons/MenuIcon";

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName;
  appereance: "primary" | "white";
}
