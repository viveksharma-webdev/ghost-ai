import { Boxes } from "lucide-react"
import type { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

const FEATURES = [
  "Map services, data flows, and dependencies",
  "Collaborate on a shared architecture canvas",
  "Turn system designs into technical specs",
]

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-base lg:grid lg:grid-cols-2">
      <section className="hidden border-r border-surface-border bg-surface p-10 lg:flex lg:flex-col">
        <div className="flex items-center gap-3 text-copy-primary">
          <div className="flex size-9 items-center justify-center rounded-xl bg-accent-dim text-brand">
            <Boxes aria-hidden="true" className="size-5" />
          </div>
          <span className="font-semibold tracking-tight">Ghost AI</span>
        </div>

        <div className="my-auto max-w-sm">
          <p className="text-sm font-medium text-brand">Collaborative system design</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-copy-primary">
            Design systems with clarity.
          </h1>
          <ul className="mt-8 space-y-4 text-sm leading-6 text-copy-secondary">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-sm">{children}</div>
      </section>
    </main>
  )
}
