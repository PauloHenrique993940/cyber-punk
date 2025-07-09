import React from "react";
import CyberSection from "./components/CyberSection";
import Features from "./components/Featurs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <CyberSection />
      <Features />
      <Testimonials />
      <Footer />
      
      
    </div>
  );
}
