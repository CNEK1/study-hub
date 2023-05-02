import styles from "./ButtonIcon.module.css";
import cn from "classnames";
import { ButtonIconProps } from "./ButtonIcon.props";
import { icons } from "./ButtonIcon.props";

const ButtonIcon = ({
  appereance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appereance == "primary",
        [styles.white]: appereance == "white",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};

export default ButtonIcon;
