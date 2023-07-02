import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { useGetProductsMutation } from "../api/userApi";

const Home = () => {
  const [data, setData] = useState([]);
  const token = "17|3K3asXXMTMSQHe45OF4v8mpAVlXtOho3HpFexoke";
  const headers = { Authorization: `Bearer ${token}` };
  // const dataFetch = async () =>
  //   await fetch("https://novaxtechno.tech/api/v1/customer/fetch/products", {
  //     headers,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // useEffect(() => {
  //   dataFetch();
  // }, []);
  // console.log(data);
  const dataFetch = async () => {
    const data = await fetch(
      "https://novaxtechno.tech/api/v1/customer/fetch/products"
    );
    const products = await data.json();
    console.log(products);
  };
  useEffect(() => {
    dataFetch;
  }, []);

  return (
    <Layout>
      <div className="">hi</div>
    </Layout>
  );
};

export default Home;
