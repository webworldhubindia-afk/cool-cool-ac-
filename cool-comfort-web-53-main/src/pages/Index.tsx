import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import BrandsSection from "@/components/home/BrandsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import GallerySection from "@/components/home/GallerySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import LocationsSection from "@/components/home/LocationsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import EmergencyBanner from "@/components/home/EmergencyBanner";
import ShowcaseSection from "@/components/home/ShowcaseSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturedServicesSection />
      <BrandsSection />
      <ServicesSection />
      <HowItWorksSection />
      <ShowcaseSection />
      <WhyChooseUsSection />
      <BeforeAfterSection />
      <GallerySection />
      <ReviewsSection />
      <LocationsSection />
      <FAQSection />
      <CTASection />
      <EmergencyBanner />
    </Layout>
  );
};

export default Index;
