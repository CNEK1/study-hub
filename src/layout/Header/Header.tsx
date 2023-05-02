import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Htag from "../../components/HTAG/Htag";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

function Header({ className, ...props }: HeaderProps): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 1,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Htag tag="h1">Some Logo</Htag>
      <ButtonIcon
        appereance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appereance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
}

export default Header;
