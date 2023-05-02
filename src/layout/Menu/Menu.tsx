import Htag from "../../components/HTAG/Htag";
import styles from "./Menu.module.css";
import { BookIcon } from "../../helpers/icons/BookIcon";
import { BoxIcon } from "../../helpers/icons/BoxIcon";
import { CloudIcon } from "../../helpers/icons/CloudIcon";
import { HatIcon } from "../../helpers/icons/HatIcon";
import Search from "../../components/Search/Search";

function Menu({ ...props }): JSX.Element {
  return (
    <div className={styles.firstLevel} {...props}>
      <Htag tag="h1">Some Logo</Htag>
      <Search />
      <ul>
        <li>
          <CloudIcon /> Courses
        </li>
        <li>
          <HatIcon />
          Services
        </li>
        <li>
          <BookIcon />
          Books
        </li>
        <li>
          <BoxIcon />
          Products
        </li>
      </ul>
    </div>
  );
}

export default Menu;
