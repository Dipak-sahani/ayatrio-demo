"use client";

import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "../context/ThemeContext";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--bg-app)] text-[var(--text-main)]">
        {/* Persistent Top Header */}
        <Header />

        {/* Layout Body with Sidebar + Main Content */}
        <div className="flex-1 flex w-full relative">
          {/* Left Navigation Sidebar */}
          <Sidebar />

          {/* Main Workspace Content Area */}
          <main
            className="flex-1 min-w-0 transition-all"
            style={{
              marginLeft: "var(--sidebar-width)",
              backgroundColor: "var(--bg-app)",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
