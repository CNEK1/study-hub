import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import { RaitingIcon } from "../../helpers/icons/RaitingIcon";
import {
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";

const Raiting = forwardRef(
  (
    {
      isEditable = false,
      raiting,
      error,
      setRaiting,
      className,
      ...props
    }: RaitingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<Array<JSX.Element>>(
      new Array(5).fill(<></>)
    );

    useEffect(() => {
      constructRaiting(raiting);
    }, [raiting]);

    const constructRaiting = (currentRaiting: number) => {
      const updatedArray = raitingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.fill]: i < currentRaiting,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(raiting)}
            onClick={() => onClick(i + 1)}
          >
            <RaitingIcon />
          </span>
        );
      });
      setRaitingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRaiting(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRaiting) {
        return;
      }
      setRaiting(i);
    };

    return (
      <div
        className={cn(styles.raitingWrapper, { [styles.error]: error })}
        {...props}
        ref={ref}
      >
        {raitingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Raiting;
