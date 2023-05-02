import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import { TextAreaProps } from "./TextArea.props";
import styles from "./TextArea.module.css";

const TextArea = forwardRef(
  (
    { error, className, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.textAreaWrapper, className)}>
        <textarea
          className={cn(className, styles.textArea, { [styles.error]: error })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default TextArea;
