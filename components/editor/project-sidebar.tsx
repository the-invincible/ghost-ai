"use client";

import { X, Plus, FolderOpen } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

function EmptyPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 px-6 text-center">
      <FolderOpen className="h-8 w-8 text-[var(--text-faint)]" />
      <p className="text-sm text-[var(--text-muted)]">{label}</p>
    </div>
  );
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <>
      {/* Slide-in sidebar — floats above canvas, does not push content */}
      <aside
        aria-label="Project sidebar"
        className={cn(
          // Positioning: fixed, below navbar (h-12 = 3rem), full remaining height
          "fixed top-12 left-0 z-40 flex h-[calc(100vh-3rem)] w-72 flex-col",
          // Surface + border
          "bg-[var(--bg-surface)] border-r border-[var(--border-default)]",
          // Slide transition
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        {/* Header */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--border-default)] px-4">
          <span className="text-sm font-semibold text-[var(--text-primary)]">
            Projects
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close sidebar"
            className="h-7 w-7 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-1 flex-col overflow-hidden px-3 pt-3">
          <Tabs
            defaultValue="my-projects"
            className="flex flex-1 flex-col gap-0"
          >
            <TabsList className="w-full rounded-xl bg-[var(--bg-elevated)]">
              <TabsTrigger value="my-projects" className="flex-1 text-xs">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1 text-xs">
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects" className="flex-1 overflow-y-auto">
              <EmptyPlaceholder label="No projects yet. Create one to get started." />
            </TabsContent>

            <TabsContent value="shared" className="flex-1 overflow-y-auto">
              <EmptyPlaceholder label="No shared projects. Projects shared with you will appear here." />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer — New Project button */}
        <div className="shrink-0 border-t border-[var(--border-default)] p-3">
          <Button className="w-full gap-2 bg-[var(--accent-primary)] text-[var(--bg-base)] hover:bg-[var(--accent-primary)]/90 font-medium rounded-xl">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
