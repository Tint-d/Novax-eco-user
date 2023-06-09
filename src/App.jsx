import React, { useEffect } from "react";
import Routes from "./routes/Routes";
import { useGetProductQuery } from "./redux/api/productApi";

const App = () => {
  const token = `13|f5PkiYZFLZYiYjaFn1I9UFnlngX1jttmuH860TsW`;
  const { data } = useGetProductQuery(token);
  // console.log(data);
  // https://novaxtechno.tech/api/v1/customer/fetch/products

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await fetch(
        "https://novaxtechno.tech/api/v1/customer/fetch/products"
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
