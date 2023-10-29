"use client";

import Header from "@/components/Header";
import Notes from "@/components/Notes";
import { useEffect } from "react";
import passportInstance from "../passport";

export default function NotesPage() {
  useEffect(() => {
    window.addEventListener("load", function () {
      passportInstance.loginCallback();
    });
  }, []);
  return (
    <div>
      <Header />
      <Notes />
    </div>
  );
}
