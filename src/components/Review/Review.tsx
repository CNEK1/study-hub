import { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";
import { useState } from "react";
import cn from "classnames";
import { UserIcon } from "../../helpers/icons/UserIcon";
import format from "date-fns/format";
import { enUS } from "date-fns/locale";
import Raiting from "../Raiting/Raiting";

function Review({ review, className, ...props }: ReviewProps): JSX.Element {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", { locale: enUS })}
      </div>
      <div className={styles.raiting}>
        <Raiting raiting={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default Review;
