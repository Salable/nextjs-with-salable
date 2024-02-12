"use client";
import { signIn } from "next-auth/react";

const SignIn = () => (
  <button
    onClick={() => signIn()}
    className="bg-slate-700 text-white rounded-lg px-4 py-2"
  >
    Sign In
  </button>
);

export default SignIn;
