import Form from "@/components/admin/users/edit-form";
import Breadcrumbs from "@/components/admin/users/breadcrumbs";
import { Metadata } from "next";
import notFound from "./not-found";
import { UserForm } from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: "User Edit",
};
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  let data: UserForm = {
    id: "",
    email: "",
    createdAt: new Date(),
    role: "user",
  };
  try {
    const url = `http:/localhost:3000/api/userById?id=${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { user } = await response.json();
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
