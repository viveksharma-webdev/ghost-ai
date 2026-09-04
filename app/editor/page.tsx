"use client"

import { useState } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { EditorSidebar } from "@/components/editor/editor-sidebar"

export default function EditorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  function toggleSidebar() {
    setIsSidebarOpen((isOpen) => !isOpen)
  }

  return (
    <div className="min-h-screen bg-base pt-14">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={toggleSidebar}
      />
      <EditorSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main aria-label="Editor canvas" className="h-[calc(100vh-3.5rem)]" />
    </div>
  )
}
