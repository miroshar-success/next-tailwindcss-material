// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from "@/components/admin/users/status";
import { formatDateToLocal } from "@/app/lib/utils";
import { DeleteUser, UpdateUser } from "./buttons";
import User from "../../../../models/User";
import { connectToDatabase } from "../../../../db";

export default async function UsersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  let data: any[] = [];
  try {
    await connectToDatabase();
    const users = await User.find({
      $or: [
        { email: { $regex: new RegExp(query, "i") } }, // Case-insensitive regex search for email
        { date: { $regex: new RegExp(query, "i") } }, // Case-insensitive regex search for date
        { role: { $regex: new RegExp(query, "i") } }, // Case-insensitive regex search for role
      ],
    })
      .sort({ date: -1 }) // Sort by date in descending order
      .limit(6); // Limit the result to 6 documents
    data = data.concat(data, users);
    console.log(data);
  } catch (error) {
    console.error("Error Fetching user:", error);
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {data &&
              data.map((user) => (
                <div
                  key={user._id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <InvoiceStatus role={user.role} />
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p>{formatDateToLocal(user.createdAt)}</p>
                      {/* <p> 2023.2.14 </p> */}
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateUser id={user._id} />
                      <DeleteUser id={user._id} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Role
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data &&
                data.map((user) => (
                  <tr
                    key={user._id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatDateToLocal(user.createdAt)}
                      {/* 2023.2.14 */}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <InvoiceStatus role={user.role} />
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateUser id={user._id} />
                        <DeleteUser id={user._id} />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
