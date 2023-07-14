import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // function addProduct() {
  //   setProducts((prevState) => [
  //     ...prevState,
  //     { name: "product3", price: 300.0 },
  //   ]);
  // }

  return (
    <>
      <Typography variant="h1">E-Store</Typography>
      <Catalog products={products} />

      {/* <button onClick={addProduct}>Add Product</button> */}
    </>
  );
}

export default App;
