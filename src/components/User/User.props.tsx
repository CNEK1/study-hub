import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface UserProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
