import Card from "../src/components/card/card";
import { useState, useEffect } from "react";

export default function Product() {
  const [data, setData] = useState();
  const [loading, setloading] = useState();
  const [filter, setfilter] = useState();

  useEffect(() => {
    const product = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    };

    product();
  }, []);

  console.log(data, "<<<<<<<<<<<<<<<<<<<<datatatatat");

  return (
    <div>
      <h1 className="flex-row justify-center ">Our Product</h1>
      <Card />
    </div>
  );
}
