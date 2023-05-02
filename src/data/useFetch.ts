import { useEffect, useState } from "react";
import axios from "axios";
import { ProductModel } from "./ProductModel.inteface";

const useFetch = (
  url: string
): { data: ProductModel[] | null; loading: boolean; error: string } => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
};

export default useFetch;
