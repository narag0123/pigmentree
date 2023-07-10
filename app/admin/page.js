import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginPage from "./loginPage";

export default async function Admin() {
    let session = await getServerSession(authOptions);

    return (
        <div className="admin min-h-[72vh]">
            <LoginPage session={session} />
        </div>
    );
}
