"use server";
import React from "react";
import Createnote from "./create-notes";
import { auth } from "@/auth";

const Notes = async () => {
  const session = await auth();
  return (
    <div>
      <Createnote session={session} />
    </div>
  );
};

export default Notes;