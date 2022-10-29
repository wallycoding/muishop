import { Container } from "@mui/system";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>MUIshop | Home</title>
        <meta
          name="description"
          content="MUIshop Description."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      </main>
    </Container>
  );
}
