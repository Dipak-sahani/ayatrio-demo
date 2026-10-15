"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  ShieldCheck,
  PhoneCall,
  Mail,
  Zap,
  MessageSquare,
  Layers,
  Send,
  Calendar,
  CheckSquare,
  Search,
  Moon,
  Sun,
  Building,
  LucideIcon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SearchModal } from "./SearchModal";
import { ProfileDrawer } from "./ProfileDrawer";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: {
    text: string;
    type: "addon" | "new";
  };
}

const HEADER_NAV_ITEMS: NavItem[] = [
  {
    id: "notices",
    label: "Notices",
    href: "/notices",
    icon: FileText,
    // badge: { text: "ADD ON", type: "addon" },
  },
  {
    id: "compliance",
    label: "Compliance",
    href: "/compliance",
    icon: ShieldCheck,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "/whatsapp",
    icon: PhoneCall,
  },
  {
    id: "email",
    label: "Email",
    href: "/email",
    icon: Mail,
  },
  {
    id: "agents",
    label: "Agents",
    href: "/agents",
    icon: Zap,
    // badge: { text: "NEW", type: "new" },
  },
  {
    id: "chat",
    label: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    id: "sprints",
    label: "Sprints",
    href: "/sprints",
    icon: Layers,
  },
  {
    id: "action-center",
    label: "Action-Center",
    href: "/action-center",
    icon: Send,
  },
  {
    id: "calendar",
    label: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    id: "to-do",
    label: "To-Do",
    href: "/to-do",
    icon: CheckSquare,
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header
        className="app-header sticky top-0 z-40 w-full flex items-center justify-between px-4 select-none transition-colors"
        style={{
          height: "var(--header-height)",
          backgroundColor: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-main)",
        }}
      >
        {/* Left Side: Brand Logo + User Name */}
        <div className="flex items-center gap-2.5 shrink-0 pr-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-hidden"
            title="Practice Management Home"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 shrink-0"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--text-inverse)",
              }}
            >
              {/* 4-petal clover icon */}
              {/* <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <circle cx="9" cy="9" r="4" />
                <circle cx="15" cy="9" r="4" />
                <circle cx="9" cy="15" r="4" />
                <circle cx="15" cy="15" r="4" />
              </svg> */}
              <Building className="w-4 h-4" />
            </div>
            <span
              className="text-[13.5px] font-semibold tracking-tight whitespace-nowrap"
              style={{ color: "var(--text-main)" }}
            >
              Dipak Sahani
            </span>
          </Link>
        </div>

        {/* Center: Top Navigation Tabs */}
        <nav
          className="flex-1 flex items-center gap-1 xl:gap-1.5 overflow-x-auto no-scrollbar h-full px-1"
          aria-label="Primary Header Navigation"
        >
          {HEADER_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href === "/notices" && pathname === "/") ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative flex items-center gap-1.5 px-2.5 xl:px-3 h-full text-[12.5px] font-medium whitespace-nowrap transition-colors group ${item.badge ? "pt-2.5" : ""
                  }`}
                style={{
                  color: isActive ? "var(--primary)" : "var(--text-muted)",
                }}
              >
                {/* Floating Badge (ADD ON or NEW) - positioned cleanly at top */}
                {item.badge && (
                  <span
                    className={`absolute top-1 left-1/2 -translate-x-1/2 transform text-[8px] font-bold px-1.5 py-0.2 rounded-xs leading-none tracking-tight shadow-2xs transition-transform group-hover:scale-105 ${item.badge.type === "addon" ? "badge-addon" : "badge-new"
                      }`}
                  >
                    {item.badge.text}
                  </span>
                )}

                <Icon
                  className={`w-3.5 h-3.5 shrink-0 transition-colors ${isActive
                    ? ""
                    : "text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                    }`}
                  style={{
                    color: isActive ? "var(--primary)" : undefined,
                  }}
                />
                <span className={isActive ? "font-semibold" : ""}>{item.label}</span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Search, Theme Toggle, Profile Avatar */}
        <div className="flex items-center gap-2.5 shrink-0 pl-3">
          {/* Search Trigger */}
          <button
            id="global-search-btn"
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-normal transition-all hover:border-gray-400 cursor-pointer"
            style={{
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--border-main)",
              color: "var(--text-subtle)",
            }}
            title="Search (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="hidden sm:inline text-[12px] text-gray-500">Search</span>
            <kbd
              className="text-[10px] font-medium px-1 rounded ml-0.5"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-main)",
                color: "var(--text-subtle)",
              }}
            >
              Ctrl K
            </kbd>
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            style={{ color: "var(--text-muted)" }}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* User Profile Avatar with Online indicator */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="relative flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold tracking-tight transition-transform hover:scale-105 focus:outline-hidden cursor-pointer"
              style={{
                backgroundColor: "var(--avatar-bg)",
                color: "var(--avatar-text)",
              }}
              title="User Account: Dipak Sahani"
              aria-expanded={isProfileOpen}
            >
              <span>DS</span>
              {/* Online Green Dot */}
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white dark:border-gray-900"
                style={{ backgroundColor: "var(--status-online)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Right Slide-out Profile Drawer */}
      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
};
