"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    const url = `http:/localhost:3000/api/userUpdateById?id=${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: role,
      }),
    });
    const { message, updatedUser } = await response.json();
    console.log("Successfully updated.");
  } catch (error) {
    console.error("Error Fetching user:", error);
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function deleteUser(id: string) {
  try {
    const url = `http:/localhost:3000/api/userDeleteById?id=${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("Successfully deleted.");
    }
  } catch (error) {
    console.error("Error Fetching user:", error);
  }
  revalidatePath("/admin/users");
  redirect("/admin/users");
}
