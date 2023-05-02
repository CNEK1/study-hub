import styles from "./Up.module.css";
import { UpIcon } from "../../helpers/icons/UpIcon";
import { useScrollY } from "../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Button from "../Button/Button";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

function Up(): JSX.Element {
  const controls = useAnimation();

  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      animate={controls}
      className={styles.up}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appereance="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
}

export default Up;
