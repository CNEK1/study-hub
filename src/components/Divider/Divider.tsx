import styles from "./Divider.module.css";
import { DividerProps } from "./Divider.props";
import cn from "classnames";

function Divider({ className, ...props }: DividerProps): JSX.Element {
  return <hr className={cn(className, styles.hr)} {...props} />;
}

export default Divider;
