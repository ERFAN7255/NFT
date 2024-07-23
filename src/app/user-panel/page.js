import { redirect } from "next/navigation";
import React from "react";

function page() {
  redirect("/user-panel/UserDetails");

  return <div>Hello baby :)</div>;
}

export default page;
