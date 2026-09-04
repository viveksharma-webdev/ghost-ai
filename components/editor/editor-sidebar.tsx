"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface EditorSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyProjectsState({ label }: { label: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-surface-border p-6 text-center text-sm text-copy-muted">
      No {label} projects yet.
    </div>
  )
}

export function EditorSidebar({ isOpen, onClose }: EditorSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={cn(
        "fixed bottom-4 left-4 top-[4.5rem] z-30 flex w-80 flex-col rounded-2xl border border-surface-border bg-surface/95 p-4 shadow-2xl backdrop-blur transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)] pointer-events-none"
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-border pb-4">
        <h2 className="text-lg font-semibold text-copy-primary">Projects</h2>
        <Button aria-label="Close projects sidebar" onClick={onClose} size="icon" variant="ghost">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Tabs className="min-h-0 flex-1 py-4" defaultValue="my-projects">
        <TabsList className="w-full" variant="line">
          <TabsTrigger className="flex-1" value="my-projects">
            My Projects
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="shared">
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent className="pt-4" value="my-projects">
          <EmptyProjectsState label="personal" />
        </TabsContent>
        <TabsContent className="pt-4" value="shared">
          <EmptyProjectsState label="shared" />
        </TabsContent>
      </Tabs>

      <Button className="w-full" type="button">
        <Plus className="h-5 w-5" />
        New Project
      </Button>
    </aside>
  )
}
