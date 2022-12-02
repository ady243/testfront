import { useState } from "react";

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
      window.location.href = "/allProducts";
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div>
        <h1>Add a product</h1>
        {error && <div>{error.message}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <label htmlFor="warrantyYears">Warranty years</label>
          <input
            type="text"
            id="warrantyYears"
            value={warrantyYears}
            onChange={(event) => setWarrantyYears(event.target.value)}
          />
          <label htmlFor="available">Available</label>
          <input
            type="checkbox"
            id="available"
            checked={available}
            onChange={(event) => setAvailable(event.target.checked)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
