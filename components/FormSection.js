"use client";
import ImageCarousel from "@/components/ImageCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import WaitListForm from "@/components/waitlist-form";
import { useIsMobile } from "@/hooks/useMobile";
import Image from "next/image";

const FormSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Image section */}
      <div className="relative w-full md:w-1/2 h-screen">
        <ImageCarousel />

        {/* Mobile form overlay - only shown on mobile */}
        {isMobile && (
          <div className="absolute bottom-0 left-0 right-0 max-h-[25vh]">
            <div className="backdrop-blur-sm bg-white/80 p-10 rounded-t-3xl shadow-lg space-y-4">
              <div className="space-y-2">
                <Image
                  src={"/logo.png"}
                  width={130}
                  height={100}
                  alt="Klaev logo"
                />
                <p className="text-sm text-neutral-600">Launching Fall 2025</p>
              </div>

              <CountdownTimer />

              <div className="space-y-4">
                <p className="text-xs text-neutral-600">
                  Be the first to experience our exclusive collection of
                  minimalist, everyday essentials. Sign up now and get 10% off
                  your first order.
                </p>
                <WaitListForm />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop content section - hidden on mobile */}
      <div className="hidden md:flex w-full md:w-1/2 h-screen items-center justify-center p-8">
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

export default FormSection;
