import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Raiting from "../Raiting/Raiting";
import TextArea from "../TextArea/TextArea";
import { CrossIcon } from "../../helpers/icons/CrossIcon";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

function ReviewForm({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("subject", {
            required: { value: true, message: "Fill in the subject" },
          })}
          placeholder="Subject"
          error={errors.subject}
        />
        <div className={styles.raiting}>
          <span>Raiting:</span>
          <Controller
            control={control}
            name="raiting"
            rules={{
              required: { value: true, message: "Type Raiting" },
            }}
            render={({ field }) => (
              <Raiting
                isEditable
                raiting={field.value}
                ref={field.ref}
                setRaiting={field.onChange}
                error={errors.raiting}
              />
            )}
          />
        </div>
        <TextArea
          {...register("description", {
            required: { value: true, message: "Fill in the Description" },
          })}
          placeholder="Text"
          className={styles.description}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button type="submit" appereance="primary">
            Send
          </Button>
          <span className={styles.info}>
            * Before publication, the review will be pre-moderated and checked
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Your review is sended</div>
        <div>Thank you, your review will be posted after a control check </div>
        <div className={styles.close}>
          <CrossIcon />
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
