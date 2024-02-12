import clsx from 'clsx';

export default function UserStatus({ role }: { role: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-blue-600 text-white': role === 'user',
          'bg-green-500 text-white': role === 'admin',
        },
      )}
    >
      {role === 'user' ? (
        <>
          User
        </>
      ) : null}
      {role === 'admin' ? (
        <>
          Administrator
        </>
      ) : null}
    </span>
  );
}
