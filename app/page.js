import ImageCarousel from "@/components/ImageCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import SignupForm from "@/components/SignupForm";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-poppins">
      <div className="w-full md:w-1/2 h-screen">
        <ImageCarousel />
      </div>

      <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-8">
        <div className="max-w-xl space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-light tracking-wide">KLAEV</h1>
            <p className="text-xl text-neutral-600">Launching Fall 2025</p>
          </div>

          <CountdownTimer />

          <div className="space-y-4">
            <p className="text-neutral-600">
              Be the first to experience our exclusive collection of minimalist,
              everyday essentials. Sign up now and get 15% off your first order.
            </p>
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
