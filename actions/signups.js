"use server";

import { createClient } from "@/utils/supabase/server";

export async function createSignup(formData) {
  const { email, phone } = formData;
  const supabase = await createClient();
  const { error } = await supabase.from("signups").insert([{ email, phone }]);
  if (error) {
    return {
      success: false,
      error: error,
    };
  }

  return { success: true };
}
