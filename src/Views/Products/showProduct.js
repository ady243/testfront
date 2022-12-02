import { Link, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";

import { Button } from "@mui/material";

const deleteProduct = async (id) => {
  const response = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

export const ShowProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleDelete = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this product? 😢"
    );
    if (confirmation) {
      await deleteProduct(id);
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="show">
        <h1>{product.name}</h1>
        <p>
          <b>Price: ${product.price}</b>
        </p>
        <p>
          <b>Rating: {product.rating}</b>
        </p>
        <p>
          <b>Warranty: {product.warrantyYears} years</b>
        </p>
        <p>
          <b>Available: {product.available ? "Yes" : "No"}</b>
        </p>
        <button className="dlt" onClick={() => handleDelete(product._id)}>
          <DeleteOutlineIcon />
        </button>

        <Link className="edt" to={`/products/edit/${product._id}`}>
          <Button>
            <EditIcon />
          </Button>
        </Link>
      </div>
    </>
  );
};
