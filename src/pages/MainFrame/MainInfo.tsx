import Advantages from "../../components/Advantages/Advantages";
import HhData from "../../components/HhData/HhData";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import User from "../../components/User/User";
import withLayout from "../../layout/WithLayout";

const MainInfo = () => {
  return (
    <div>
      <User />
      <ProductInfo />
      <HhData />
      <Advantages />
    </div>
  );
};

export default withLayout(MainInfo);
