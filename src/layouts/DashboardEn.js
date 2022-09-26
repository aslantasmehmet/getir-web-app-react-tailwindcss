import React from "react";
import Header from "../componentsEn/Header";
import HeroSection from "../componentsEn/HeroSection";
import Categories from "../componentsEn/Categories";
import Campaigns from "../componentsEn/Campaigns";
import MobileApp from "../componentsEn/MobileApp";
import Card from "../componentsEn/Card";
import Footer from "../componentsEn/Footer";

export default function DashboardEn() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Categories />
      <div className="bg-gray-50  ">
        <div className="container mx-auto ">
          <Campaigns />
          <MobileApp />
        </div>
      </div>
      <div className="w-full flex items-center bg-gray-50 h-full justify-between">
        <Card />
      </div>

      <Footer />
    </div>
  );
}
