"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return <button onClick={() => signIn("github")}>Login</button>;
};

export default SignInButton;
