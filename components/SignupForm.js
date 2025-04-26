"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { createSignup } from "@/actions/signups";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createSignup({ email, phone });
    if (response.success) {
      toast.success({
        title: "Welcome to KLAEV",
        description: "You'll receive a 10% discount code when we launch.",
      });
      setEmail("");
      setPhone("");
    } else {
      toast.error({
        title: "Welcome to KLAEV",
        description: "You'll receive a 10% discount code when we launch.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="relative">
        <Mail className="absolute left-0 top-2 h-5 w-5 text-neutral-400" />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full pl-8 pr-2 py-2 bg-transparent border-b border-neutral-300 focus:border-neutral-900 outline-none transition-colors"
        />
      </div>
      <div className="relative">
        <Phone className="absolute left-0 top-2 h-5 w-5 text-neutral-400" />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full pl-8 pr-2 py-2 bg-transparent border-b border-neutral-300 focus:border-neutral-900 outline-none transition-colors"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-neutral-900 hover:bg-neutral-800 text-white"
      >
        Get 10% Off
      </Button>
    </form>
  );
};

export default SignupForm;
