"use client";
import ImageCarousel from "@/components/ImageCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import WaitListForm from "@/components/waitlist-form";
import { useIsMobile } from "@/hooks/useMobile";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/icon";
import { cn } from "@/lib/utils";

const FormSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row">
      {!isMobile && (
        <div
          className={cn(
            "absolute right-0 bottom-0 flex gap-3 h-content mr-4 mb-4 z-99"
          )}
        >
          {getSocialIcons()}
        </div>
      )}
      {/* Image section */}
      <div className="relative w-full md:w-1/2 h-screen">
        <ImageCarousel />

        {/* Mobile form overlay - only shown on mobile */}
        {isMobile && (
          <div className="absolute bottom-0 left-0 right-0 max-h-[25vh]">
            <div className="relative backdrop-blur-sm bg-white/80 p-10 rounded-t-3xl shadow-lg space-y-4">
              <div className="space-y-2">
                <div
                  className={cn(
                    "absolute right-3 top-10 flex gap-3 h-content mr-4 mb-4 z-99"
                  )}
                >
                  {getSocialIcons()}
                </div>
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
          <div className="relative space-y-4">
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

const getSocialIcons = () => {
  return (
    <>
      <Link href={"https://www.instagram.com/getKlaev/"} target="_blank">
        <InstagramIcon />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=61575756869911"}
        target="_blank"
      >
        <FacebookIcon />
      </Link>
      <Link
        href={"https://www.tiktok.com/@getklaev?_t=ZS-8vt50Be9EEU&_r=1"}
        target="_blank"
      >
        <TikTokIcon />
      </Link>
    </>
  );
};
export default FormSection;
