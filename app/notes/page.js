'use client'

import Header from "@/components/Header";
import Notes from "@/components/Notes";
import { useEffect } from "react";
import { passport } from "@imtbl/sdk";

export default function NotesPage() {
    useEffect(()=>{
        window.addEventListener('load', function() {
          passport.loginCallback();
        });
      },[]);
  return(
  <div>
    <Header />
    <Notes />
  </div>
  )
}
