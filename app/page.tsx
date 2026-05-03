import { EditorShell } from "@/components/editor/editor-shell";

export default function Home() {
  return (
    <EditorShell>
      {/* Canvas placeholder — replace with React Flow canvas in a later feature */}
      <div className="flex h-[calc(100vh-3rem)] items-center justify-center">
        <p className="text-sm text-[var(--text-faint)]">Canvas goes here</p>
      </div>
    </EditorShell>
  );
}
