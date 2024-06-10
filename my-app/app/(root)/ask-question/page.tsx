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
  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);

  // In case the user signs out while on the page.
  if (!isLoaded || !isSignedIn) {
    return <p>Not Logged in</p>;
  }

  return (
    <div>
      Hello, {user.fullName} your current active session is
      {/* {sessionId} */}
    </div>
  );
};

export default AskQuestion;
