import { LoginForm } from "@/components/login-form"
import { BrandSidebar } from "@/components/brand-sidebar"

export default function LoginPage() {
  return (
    <main className="grid min-h-svh w-full lg:grid-cols-[1fr_1.1fr]">
      <section className="flex flex-col items-center justify-center px-6 py-12 sm:px-10">
        <div className="mb-8 flex items-center gap-2 lg:hidden">
          <div className="flex size-9 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground">
            A
          </div>
          <div>
            <p className="text-sm font-semibold leading-none text-foreground">AssetOS</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Enterprise Asset Management
            </p>
          </div>
        </div>
        <LoginForm />
      </section>
      <BrandSidebar />
    </main>
  )
}
