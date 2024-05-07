import React from "react";
import Navbar from "../components/Navbar";
import Questions from "../components/Questions";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Questions />
      <Footer />
    </>
  );
}
