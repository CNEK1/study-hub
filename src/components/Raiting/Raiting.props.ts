import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface RaitingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  raiting: number;
  setRaiting?: (raiting: number) => void;
  error?: FieldError;
}
