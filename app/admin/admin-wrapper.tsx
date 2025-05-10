"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminWrapper = () => {
  return <App />;
};

export default AdminWrapper;
