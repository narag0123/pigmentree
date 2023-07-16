import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginPage from "./loginPage";

export default async function Admin() {
    let session = await getServerSession(authOptions);

    return (
        <div className="admin min-h-[calc(100vh-24.2rem)] flex flex-col items-center justify-center">
            <LoginPage session={session} />
        </div>
    );
}
