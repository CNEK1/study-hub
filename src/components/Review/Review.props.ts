import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReviewModel } from "../../data/ProductModel.inteface";

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel;
}
