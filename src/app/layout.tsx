import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TaskProvider } from "@/components/context";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Task",
  description: "It is a Todo Task Manager website which enables a person to enlist and handle its priority tasks.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["todo app", "task manager", "tasks in next"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>{children}</TaskProvider>
        <Toaster />
      </body>
    </html>
  );
}
