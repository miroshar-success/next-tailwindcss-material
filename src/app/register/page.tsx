import { RegisterCard } from "@/components/register-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
};
export default function RegisterPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <RegisterCard />
        </main>
    );
}
