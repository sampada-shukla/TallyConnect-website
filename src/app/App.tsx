import { useState } from "react";
import { Header } from "./components/Header";
import { LoginModal } from "./components/LoginModal";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PricingSection } from "./components/PricingSection";
import { UserSideSection } from "./components/UserSideSection";
import { AdminPanelSection } from "./components/AdminPanelSection";
import { TechnicalSection } from "./components/TechnicalSection";
import { PartnersSection } from "./components/PartnersSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import BecomePartner from "./components/BecomePartner";
import { DemoPage } from "./components/DemoPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-[Inter]">
      <Header onLoginClick={() => setLoginModalOpen(true)} />

      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <main>
        {currentPage === "home" && (
          <>
            <HeroSection goToDemo={() => setCurrentPage("demo")} />
            <FeaturesSection />
            <PricingSection />
            <UserSideSection />
            <AdminPanelSection />
            <TechnicalSection />
            <PartnersSection goToPartnerPage={() => setCurrentPage("partner")} />
            <FAQSection />
          </>
        )}

        {currentPage === "partner" && (
          <BecomePartner />
        )}

        {currentPage === "demo" && (
        <DemoPage />
        )}
      </main>

      <Footer />
    </div>
  );
}