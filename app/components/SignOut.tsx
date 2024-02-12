"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="absolute top-4 right-4 bg-slate-700 text-white rounded-lg px-4 py-2"
    >
      Sign out
    </button>
  );
}
