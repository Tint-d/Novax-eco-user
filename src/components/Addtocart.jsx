import Lottie from "lottie-react";
import AnimationAddToCart from "../lottie/AddToCart.json";

const Addtocart = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Lottie
        className=" w-[300px] md:w-[350px]"
        animationData={AnimationAddToCart}
      />
    </div>
  );
};

export default Addtocart;
