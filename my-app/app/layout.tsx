//import of clerk - video 07 authentication
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
//import to add globalcss video 08 layout
import "./globals.css";

//import to add font video 08 layout
import { Inter, Space_Grotesk } from "next/font/google";

//import to add metadata video 08 layout
import { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

// this code is to use fonts in our project - video 08 layout
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotest = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

// changing metadata of project - video 08 layout
export const metadata: Metadata = {
  title: "DevOverflow",
  description: "A project created to test something",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // by changing clerk provider appearance we are changing how button and link will look - video 08 layout and video 07 authentication
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotest.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          {/*  - video 07 authentication */}
          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */}
          <ThemeProvider>
            <div className="flex justify-end">
              {/* <SignedIn>
                <UserButton />
              </SignedIn> */}
            </div>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
