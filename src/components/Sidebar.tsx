"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  UserCheck,
  Users,
  Network,
  Briefcase,
  ClipboardList,
  Receipt,
  UsersRound,
  BarChart3,
  HardDrive,
  LayoutGrid,
  LucideIcon,
  UserRoundGroup,
  ShoppingCart,
  ReceiptText,
  Folder,
  Grip
} from "lucide-react";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "proposal", label: "Proposal", href: "/proposal", icon: FileText },
  { id: "leads", label: "Leads", href: "/leads", icon: UserCheck },
  { id: "client", label: "Client", href: "/client", icon: Users },
  { id: "groups", label: "Groups", href: "/groups", icon: UserRoundGroup },
  { id: "services", label: "Services", href: "/services", icon: ShoppingCart },
  { id: "task", label: "Task", href: "/task", icon: ClipboardList },
  { id: "invoice", label: "Invoice", href: "/invoice", icon: ReceiptText },
  { id: "team", label: "Team", href: "/team", icon: UsersRound },
  { id: "reports", label: "Reports", href: "/reports", icon: BarChart3 },
  { id: "drive", label: "Drive", href: "/drive", icon: Folder },
  { id: "registry", label: "Registry", href: "/registry", icon: Grip },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside
      className="app-sidebar fixed left-0 top-[var(--header-height)] bottom-0 z-30 flex flex-col justify-start overflow-visible select-none transition-colors"
      style={{
        width: "var(--sidebar-width)",
        backgroundColor: "var(--bg-surface)",
        borderRight: "1px solid var(--border-main)",
      }}
      aria-label="Sidebar Navigation"
    >
      <div className="flex flex-col items-center py-2 gap-0.5 w-full">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex flex-col items-center justify-center py-1.5 px-0.5 text-center transition-all group relative cursor-pointer font-semibold ${isActive
                ? ""
                : "hover:bg-gray-100/70 dark:hover:bg-gray-800/40"
                }`}
              style={{
                color: isActive ? "var(--primary)" : "var(--text-main)",
                backgroundColor: isActive ? "var(--primary-light)" : "transparent",
              }}
              title={item.label}
            >
              {/* Active left indicator bar */}
              {isActive && (
                <div
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r"
                  style={{ backgroundColor: "var(--primary)" }}
                />
              )}

              <Icon
                className={`w-4 h-4 mb-0.5 transition-transform group-hover:scale-110 ${isActive
                  ? ""
                  : "text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
                  }`}
                style={{
                  color: isActive ? "var(--primary)" : undefined,
                }}
              />
              <span
                className="text-[10px] font-semibold leading-tight tracking-tight truncate max-w-full px-0.5"
                style={{
                  color: isActive ? "var(--primary)" : "var(--text-main)",
                }}
              >
                {item.label}
              </span>

              {/* Floating Label Tooltip on Hover */}
              <div
                className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2.5 px-2.5 py-1 rounded-md text-xs font-semibold tracking-tight whitespace-nowrap shadow-md border opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50 select-none"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-main)",
                  color: "var(--text-main)",
                }}
              >
                {item.label}
                {/* Triangular arrow pointing back to sidebar icon */}
                <div
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-l border-b"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-main)",
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
