"use client";

import Header from "@/components/Header";
import Notes from "@/components/Notes";
import { useEffect } from "react";
import passportInstance from "../passport";

export default function NotesPage() {
  useEffect(() => {
    window.addEventListener("load", function () {
      passportInstance.loginCallback().then(()=>console.log("promise success").catch(error=>console.log(error)));
    });
  }, []);
  return (
    <div>
      <Header />
      <Notes />
    </div>
  );
}
