import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-w-full max-w-7xl justify-center gap-10 px-5 py-10 sm:px-10 md:px-20 lg:px-40 lg:py-20">
      {children}
    </div>
  );
}
