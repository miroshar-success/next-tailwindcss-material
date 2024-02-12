'use server';

import Form from "@/components/admin/users/edit-form";
import Breadcrumbs from "@/components/admin/users/breadcrumbs";
import notFound from "./not-found";
import { UserForm } from "@/app/lib/definitions";
import User from "../../../../../../models/User";
import { connectToDatabase } from "../../../../../../db";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  let data: UserForm = {
    id: "",
    email: "",
    createdAt: new Date(),
    role: "",
  };
  try {
    await connectToDatabase();
    const user = await User.findById(id);
    if (!user) {
      notFound();
    }
    data = {
      email: user.email,
      id: user._id,
      role: user.role,
      createdAt: user.createdAt,
    };
    console.log(data);
  } catch (error) {
    console.error("Error Fetching user:", error);
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/admin/users" },
          {
            label: "Edit User",
            href: `/admin/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form user={data} />
    </main>
  );
}
