import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Works from "../components/Works";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Works />
      <Contact />
    </Layout>
  );
}
