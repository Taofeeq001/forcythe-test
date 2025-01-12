import Discover from "@/components/Discover";
import Index from "@/components/Index";
import Navigation from "@/components/Reusable/Navigation";
import Spark from "@/components/Spark";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#030516] flex flex-col">
      <Navigation />
      <Index />
      <Discover />
      <Spark />
    </div>

  );
}
