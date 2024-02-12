import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteUser } from '@/app/lib/actions';

export function UpdateUser({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/users/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteUser({ id }: { id: string }) {
  const deleteUserWithId = deleteUser.bind(null, id);
  return (
    <>
      <form action={deleteUserWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}
