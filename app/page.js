import HeroSection from "@components/HeroSection";
import CallToAction from "@components/CallToAction";
//import ImageSection from "@components/ImageSection";
import VideoSection from "@components/VideoSection";
import JoinUs from "@components/JoinUs/JoinUsComponent";
import WhoAreWe from "@components/JoinUs/WhoAreWe";
import Steps from "@components/HowItWorks/HowItWorks";
import TestimonialCard from "@components/Testimony/TestimonialCard";
import FAQContainer from "@components/FAQ/FAQContainer";
import { faqData } from "@components/FAQ/FAQ-Data";

const Home = () => {
  return (
    <main className="mt-4 md:mt-4 w-full max-w-[1273px] max-md:mt-4 max-md:max-w-full">
      <meta name="google-site-verification" content="jaPqIV9KYumZmq-VacARC-4CnV9iniGSC1cW9Ix-t4A" />
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <HeroSection />
          <CallToAction />
        </section>
        <VideoSection />
      </div>
      <WhoAreWe />
      <JoinUs />

      <Steps />
      <TestimonialCard />
      <FAQContainer questions={faqData} />
    </main>
  );
};

export default Home;
