import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/components/admin/users/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Users Edit',
};
export default async function Page({params}:{params:{id: string}}) {
    const id = params.id;
    let user = {};
    try {
        const url = 'http:/localhost:3000/api/user';
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        });
        users = await response.json();
        console.log(users[0]);
    } catch (error) {
        console.error('Error Fetching user:', error);
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Invoices', href: '/dashboard/invoices'},
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}
