import { priceEU } from "../../helpers/helpers";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";
import Raiting from "../Raiting/Raiting";
import Tag from "../Tag/Tag";
import styles from "./Products.module.css";
import { PropductsProps } from "./Products.props";
import cn from "classnames";
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

const Products = motion(
  forwardRef(
    (
      { product, className, ...props }: PropductsProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);
      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <img src="!" alt="" />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              {priceEU(product.price)}
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green">
                  {priceEU(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              {priceEU(product.credit)}/
              <span className={styles.month}>month</span>
            </div>
            <div className={styles.raiting}>
              <Raiting raiting={product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories?.map((c) => (
                <Tag key={c} className={styles.categories} color="ghost">
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>Price</div>
            <div className={styles.creditTitle}>On Credit</div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount} reviews
              </a>
            </div>

            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map((c) => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicsName}>{c.name}:</span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              <div className={styles.advantages}>
                <div className={styles.advTitle}>Advantages</div>
                <div>{product.advantages}</div>
              </div>
              <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Disadvantages</div>
                <div>{product.disadvantages}</div>
              </div>
            </div>

            <Divider className={cn(styles.hr, styles.hr2)} />

            <div className={styles.actions}>
              <Button appereance="primary">Learn more</Button>
              <Button
                className={styles.reviewButton}
                appereance="ghost"
                arrow={isReviewOpened ? "down" : "right"}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
              >
                Read Reviews
              </Button>
            </div>
          </Card>

          <Card
            color="blue"
            className={cn(styles.reviews, {
              [styles.opened]: isReviewOpened,
              [styles.closed]: !isReviewOpened,
            })}
            ref={reviewRef}
          >
            {product.reviews.map((r) => (
              <div key={r._id}>
                <Review review={r} />
                <Divider />
              </div>
            ))}
            <ReviewForm productId={product._id} />
          </Card>
        </div>
      );
    }
  )
);

export default Products;
