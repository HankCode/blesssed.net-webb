"use server";

import { createClient } from "@/utils/supabase/server";
import { DesireFormData } from "@/types";
import { revalidatePath } from "next/cache";

type AddDesireResult = {
  success: boolean;
  message: string;
};

const AddDesireAction = async (data: DesireFormData): Promise<AddDesireResult> => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    const { data: desire, error } = await supabase
      .from("desires")
      .insert({ ...data, user_id: user.id });

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    revalidatePath("/userportal/desires");
    return {
      success: true,
      message: "Desire added successfully",
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "Unexpected error occurred while adding the desire.",
    };
  }
};

export default AddDesireAction;
