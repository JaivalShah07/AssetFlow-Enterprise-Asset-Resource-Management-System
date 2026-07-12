import { ShieldCheck, Boxes, Activity } from "lucide-react"

const features = [
  { icon: Boxes, label: "Unified asset registry across every facility" },
  { icon: Activity, label: "Real-time status and maintenance tracking" },
  { icon: ShieldCheck, label: "SOC 2 compliant, audit-ready access controls" },
]

export function BrandSidebar() {
  return (
    <aside className="relative hidden h-full flex-col justify-between overflow-hidden bg-primary p-10 text-primary-foreground lg:flex">
      <div className="flex items-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/15 font-bold">
          A
        </div>
        <div>
          <p className="text-sm font-semibold leading-none">AssetOS</p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-primary-foreground/60">
            Enterprise Asset Management
          </p>
        </div>
      </div>

      <div className="relative z-10 space-y-8">
        <div className="overflow-hidden rounded-xl border border-primary-foreground/15">
          <img
            src="/warehouse.png"
            alt="Warehouse aisles stocked with high-value assets"
            className="h-56 w-full object-cover"
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-balance">Total Visibility. Total Control.</h2>
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/70 text-pretty">
            Manage high-value assets across your entire organization with institutional precision and mission-critical
            reliability.
          </p>
        </div>

        <ul className="space-y-3">
          {features.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-primary-foreground/85">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary-foreground/10">
                <Icon className="size-4" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-primary-foreground/50">Trusted by asset-intensive enterprises worldwide.</p>
    </aside>
  )
}
