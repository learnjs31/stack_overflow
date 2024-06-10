"use client";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { log } from "console";

const AskQuestion = () => {
  //   return (
  //     <SignedIn>
  //       <div>Ask a Question----</div>
  //     </SignedIn>
  //   );

  //code copied from clerk website
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  //   const { IsLOaded, isSignedIn, user } = useUser();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return <p>Not Logged in</p>;
  }

  return <div>Hello, your current active session is -{sessionId}</div>;
};

export default AskQuestion;
