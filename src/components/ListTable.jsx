import React, { useCallback, useEffect, useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import {
  useDeleteProductMutation,
  useGetAddToCartQuery,
} from "../api/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddCountMutation } from "../api/addToCount";
const ListTable = (props) => {
  const { product_name, total_price, item_count, cart_id, setProduct } = props;
  const [count, setItem_count] = useState(item_count);
  const { data: toFetch, refetch } = useGetAddToCartQuery();
  console.log(toFetch);
  useEffect(() => {
    setProduct(data);
    refetch();
    console.log(data);
  }, [count]);
  // console.log(`Running${product_name}`);
  const [deleteProduct] = useDeleteProductMutation();
  const [addCount, data] = useAddCountMutation();
  console.log(data);
  const add = () => {
    addCount({ cart_id, action: 1 });
    setItem_count(count + 1);
  };
  const minus = useCallback(() => {
    if (count > 1) {
      addCount({ cart_id, action: 0 })
        .then(() => {
          setItem_count(count - 1);
        })
        .catch((err) => console.log(err));
    }
  }, [item_count]);

  return (
    <div className="flex justify-between py-3">
      <div className="w-5/12">
        <h2 className="text-[16px] mx-2 font-bold text-header">
          {product_name}
        </h2>
      </div>
      <div className="w-2/12 flex items-center justify-between bg-white shadow  px-3 py-1 rounded-md ">
        <BiMinus
          onClick={minus}
          className=" text-[16px] font-medium text-header"
        />
        <p className=" text-[16px] font-medium text-header px-3">{count}</p>
        <BiPlus
          onClick={add}
          className=" text-[16px] font-medium text-header"
        />
      </div>
      <div className="w-2/12">
        <h2 className="text-[16px] font-bold text-header text-center">
          {total_price}
        </h2>
      </div>
      <div className="w-2/12">
        <FiTrash2
          onClick={() => {
            deleteProduct({ cart_id });
            toast("Successful", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
          className=" text-red-700 mx-auto"
        />
      </div>
    </div>
  );
};

export default ListTable;
