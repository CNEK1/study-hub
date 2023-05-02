import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import { SearchIcon } from "../../helpers/icons/SearchIcon";

function Search({ className, ...props }: SearchProps): JSX.Element {
  const [search, setSearch] = useState("");

  return (
    <div className={cn(className, styles.search)}>
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
      />
      <Button appereance="primary" className={styles.button} onClick={() => {}}>
        <SearchIcon />
      </Button>
    </div>
  );
}

export default Search;
