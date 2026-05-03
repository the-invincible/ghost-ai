"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  className?: string;
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  className,
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex h-12 items-center px-3",
        "bg-surface border-b border-[var(--border-default)]",
        className
      )}
    >
      {/* Left section — sidebar toggle */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="h-8 w-8 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Center section */}
      <div className="flex flex-1 items-center justify-center" />

      {/* Right section — reserved for future use */}
      <div className="flex items-center" />
    </header>
  );
}
