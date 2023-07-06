import LoginPage from "./loginPage/loginPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Admin() {
    let session = await getServerSession(authOptions);
    console.log(session);

    return (
        <div className="admin min-h-[72vh]">
            <LoginPage />
        </div>
    );
}
