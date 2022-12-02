import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid, Paper, styled } from "@mui/material";
import ResponsiveAppBar from "../../layouts/header/Header";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:4000/api/products");
  return await response.json();
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const data = useSelector((state) => state.products);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container maxWidth="2xl" className="mt">
        <Grid sx={{ flexGrow: 1 }} spacing={1}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing="24">
              {products.map((product) => (
                <Grid key={product._id} item>
                  <Item key={product._id}>
                    <h2>{product.name}</h2>
                    <p>{product.type}</p>
                    <p>{product.price}</p>

                    <Link variant="contained" to={`/products/${product._id}`}>
                      <Button
                        sx={{ marginRight: "10px", background: "#F295A3" }}
                        variant="contained"
                      >
                        {" "}
                        Voir le produit
                      </Button>
                    </Link>
                    <Link to={`/products/edit/${product._id}`}>
                      <Button sx={{ marginLeft: "10px" }} variant="contained">
                        {" "}
                        Modifier le produit
                      </Button>
                    </Link>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
