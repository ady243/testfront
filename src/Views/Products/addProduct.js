import { useState } from "react";
import { InputLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const addProduct = async (product) => {
  const response = await fetch("http://localhost:4000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [warrantyYears, setWarrantyYears] = useState("");
  const [available, setAvailable] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // TODO: redirect to products page
      const product = await addProduct({
        name,
        type,
        price,
        rating,
        warrantyYears,
        available,
      });
      window.location.href = "/";
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div variant="contained" className="add">
        <h1>Add a product</h1>
        {error && <div>{error.message}</div>}
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <InputLabel htmlFor="type">Type</InputLabel>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
          <InputLabel htmlFor="price">Price</InputLabel>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <InputLabel htmlFor="rating">Rating</InputLabel>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <InputLabel htmlFor="name">warranty years</InputLabel>
          <input
            type="text"
            id="warrantyYears"
            value={warrantyYears}
            onChange={(event) => setWarrantyYears(event.target.value)}
          />
          <div className="available">
            <InputLabel htmlFor="available">Available</InputLabel>
            <input
              type="checkbox"
              id="available"
              checked={available}
              onChange={(event) => setAvailable(event.target.checked)}
            />
            <button type="submit" className="add_product">
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
