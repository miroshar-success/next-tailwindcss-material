"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import User from "../../../models/User";
import { connectToDatabase } from "../../../db";

const FormSchema = z.object({
  id: z.string(),
  role: z.string(),
});

const UpdateUser = FormSchema.omit({ id: true, role: true });

export type State = {
  errors?: {
    id?: string[];
    email?: string[];
    role?: string[];
  };
  message?: string | null;
};

export async function updateUser(
  id: string,
  prevState: State,
  formData: FormData
) {
  const role = formData.get("role");
  try {
    await connectToDatabase();
    const updatedUser = await User.findByIdAndUpdate(id, { role });

    console.log("Successfully updated.");
  } catch (error) {
    console.error("Error Fetching user:", error);
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function deleteUser(id: string) {
  try {
    await connectToDatabase();
    const deletedUser = await User.findByIdAndDelete(id);
    console.log("Successfully deleted.");
  } catch (error) {
    console.error("Error Fetching user:", error);
  }
  revalidatePath("/admin/users");
  redirect("/admin/users");
}
