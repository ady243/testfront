import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Checkbox, FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";

export const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`http://localhost:4000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const updateProduct = async (product) => {
    const response = await fetch(`http://localhost:4000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedProduct = await updateProduct(product);
      window.location.href = "/products/" + id;
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="edit_product" variant="contained">
      <h1>Edit product</h1>
      {error && <div>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            aria-describedby="my-helper-text"
            onChange={(event) =>
              setProduct({ ...product, name: event.target.value })
            }
            value={product.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="type">Type</InputLabel>
          <Input
            id="type"
            aria-describedby="my-helper-text"
            onChange={(event) =>
              setProduct({ ...product, type: event.target.value })
            }
            value={product.type}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            id="price"
            aria-describedby="my-helper-text"
            onChange={(event) =>
              setProduct({ ...product, price: event.target.value })
            }
            value={product.price}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="rating">Rating</InputLabel>
          <Input
            id="rating"
            aria-describedby="my-helper-text"
            onChange={(event) =>
              setProduct({ ...product, rating: event.target.value })
            }
            value={product.rating}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="warrantyYears">Warranty years</InputLabel>
          <Input
            id="warrantyYears"
            aria-describedby="my-helper-text"
            onChange={(event) =>
              setProduct({ ...product, warrantyYears: event.target.value })
            }
            value={product.warrantyYears}
          />
        </FormControl>

        <Checkbox
          checked={product.available}
          onChange={(event) =>
            setProduct({ ...product, available: event.target.checked })
          }
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
