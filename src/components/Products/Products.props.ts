import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../data/ProductModel.inteface";

export interface PropductsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}
