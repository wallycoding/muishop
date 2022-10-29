import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Box, CircularProgress, Grid, Backdrop } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductEntity from "../domain/entities/ProductEntity";
import useShopState from "../states/shop";

interface ShopProps {
  products: ProductEntity[];
  host: string;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { host } = context.req.headers;
  try {
    const response = await fetch(`https://${host}/api/shop`);
    const products = (await response.json()) as ProductEntity[];
    return {
      props: { products, host },
    };
  } catch (error) {
    return {
      props: { products: [], host },
    };
  }
};

export default function Shop(props: ShopProps) {
  const { router, itemsByScreen, showBackdrop, setShowBackdrop } =
    useShopState();
  return (
    <Container>
      <Head>
        <title>MUIshop | Shop</title>
        <meta name="description" content="MUIshop Description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid
          style={{
            display: "grid",
            minWidth: "100%",
          }}
          gap={2}
          marginTop={5}
          gridTemplateColumns={`repeat(${itemsByScreen}, 1fr)`}
        >
          {itemsByScreen ? (
            props.products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={async () => {
                  setShowBackdrop(true);
                  const session = await fetch(
                    `https://${props.host}/api/payment`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        price_id: product.defaultPrice,
                      }),
                    }
                  ).then((response) => response.json());
                  router.push(session.url);
                }}
              />
            ))
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </Grid>
      </main>
      <Footer />
    </Container>
  );
}
