import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import { SortIcon } from "../../helpers/icons/SortIcon";
import cn from "classnames";

export function Sort({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Raiting)}
        className={cn({
          [styles.active]: sort === SortEnum.Raiting,
        })}
      >
        <div className={styles.sortIcon}>
          <SortIcon />
        </div>
        By Raiting
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <div className={styles.sortIcon}>
          <SortIcon />
        </div>
        By&nbsp;Price
      </span>
    </div>
  );
}
