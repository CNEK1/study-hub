import styles from "./ProductInfo.module.css";
import Htag from "../HTAG/Htag";
import Tag from "../Tag/Tag";
import { Sort } from "../Sort/Sort";
import { SortEnum } from "../Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { products } from "../../data/products";
import Products from "../Products/Products";

const ProductInfo = (): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
    sortReducer,
    {
      products: products,
      sort: SortEnum.Raiting,
    }
  );
  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };
  return (
    <>
      <div className={styles.title}>
        <Htag tag="h1">some title</Htag>
        <Tag color="grey" size="md">
          {products.length}
        </Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts.map((e) => (
          <Products layout key={e._id} product={e} />
        ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Jobs - on some category</Htag>
        <Tag color="red" size="md">
          hh.com
        </Tag>
      </div>
    </>
  );
};

export default ProductInfo;
