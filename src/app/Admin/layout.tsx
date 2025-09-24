// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import TopBar from "@/components/admin/Topbar";
// import { authOptions } from "@/app/api/auth/[...nextAuth]/route";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);
  const session = true;


  if (!session) {
    redirect("/Admin/Login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
