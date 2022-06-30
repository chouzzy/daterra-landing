import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Container_1 } from "../components/Container_1";
import { Container_2 } from "../components/Container_2";
import { Container_3 } from "../components/Container_3";
import { Container_4 } from "../components/Container_4";


export default function Home () {
  return (
    <>
    <Head>
      <title>Daterra - Qualidade que se sente</title>
    </Head>
    <Container_1/>
    <Container_2/>
    <Container_3/>
    <Container_4/>
    </>
  )
}
