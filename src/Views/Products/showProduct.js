import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ResponsiveAppBar from "../../layouts/header/Header";

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
            "Are you sure you want to delete this product?"
        );
        if (confirmation) {
            await deleteProduct(id);
            window.location.href = "/products";
        }
    };

    return (
        <>
            <div>
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Warranty: {product.warrantyYears} years</p>
                <p>Available: {product.available ? "Yes" : "No"}</p>
                <button onClick={() => handleDelete(product._id)}>Delete product</button>
                <Link to={`/products/edit/${product._id}`}>Edit product</Link>
            </div>
        </>
    );
};
