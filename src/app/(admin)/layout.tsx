import NavBar from "@/components/navbar";
import AdminNavBar from "@/components/admin-navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <AdminNavBar/>
      {children}
    </>
  );
}
