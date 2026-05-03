"use client";

import { useState } from "react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { cn } from "@/lib/utils";

interface EditorShellProps {
  children?: React.ReactNode;
  className?: string;
}

export function EditorShell({ children, className }: EditorShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={cn("min-h-screen bg-[var(--bg-base)]", className)}>
      {/* Top navbar — fixed, always on top */}
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* Sidebar — floats above canvas, does not affect layout flow */}
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main canvas area — offset by navbar height, never pushed by sidebar */}
      <main className="pt-12">
        {children}
      </main>
    </div>
  );
}
