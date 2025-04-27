"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Loader2, Mail, Phone } from "lucide-react";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { createSignup } from "@/actions/signups";

const WaitListForm = () => {
  const [loading, setLoading] = useState(false);
  const waitlistSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Please enter a valid email"),
    phone: z.string().min(1, { message: "Phone is required" }),
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const response = await createSignup(values);
      if (response.success) {
        toast.success("Welcome to KLAEV", {
          description:
            "Thank you for signing up, your 10% launch offer will land in your inbox soon",
        });
        form.reset();
      } else {
        toast.error("Something went wrong", {
          description: "Please try again",
        });
      }
    } catch (error) {
      console.log("signup error: ", error);
    } finally {
      setLoading(false);
    }
  }

  const form = useForm({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md"
      >
        <FormField
          className
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-0 top-2 h-5 w-5 text-neutral-400" />
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-8 pr-2 py-2 bg-transparent border-b border-neutral-300 focus:border-neutral-900 outline-none transition-colors"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          className
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-0 top-2 h-5 w-5 text-neutral-400" />
                  <Input
                    {...field}
                    placeholder="Phone number"
                    className="w-full pl-8 pr-2 py-2 bg-transparent border-b border-neutral-300 focus:border-neutral-900 outline-none transition-colors"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-neutral-900 hover:bg-neutral-800 text-white"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : <>Get 10% Off</>}
        </Button>
      </form>
    </Form>
  );
};

export default WaitListForm;
