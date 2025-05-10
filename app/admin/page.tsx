
import { isAdmin } from "@/lib/admin";
import AdminWrapper from "./admin-wrapper";
import { redirect } from "next/navigation";

const AdminPage = () => {


  if (!isAdmin()) {
    redirect("/")
  }

  return <AdminWrapper />;
};

export default AdminPage;
