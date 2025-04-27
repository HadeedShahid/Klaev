import ImageCarousel from "@/components/ImageCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";
import WaitListForm from "@/components/waitlist-form";
import FormSection from "@/components/FormSection";

const Index = () => {
  return <FormSection />;
  return (
    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row font-poppins">
      <div className="w-full md:w-1/2 h-screen">
        <ImageCarousel />
      </div>

      <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-8">
        <div className="max-w-xl space-y-12">
          <div className="space-y-4">
            <Image
              src={"/logo.png"}
              width={160}
              height={100}
              alt="Klaev logo"
            />
            <p className="text-xl text-neutral-600">Launching Fall 2025</p>
          </div>

          <CountdownTimer />

          <div className="space-y-4">
            <p className="text-neutral-600">
              Be the first to experience our exclusive collection of minimalist,
              everyday essentials. Sign up now and get 15% off your first order.
            </p>
            <WaitListForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
