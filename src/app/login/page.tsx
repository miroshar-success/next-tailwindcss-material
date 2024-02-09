import { LoginCard } from "@/components/login-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
};
export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <LoginCard />
        </main>
    );
}
