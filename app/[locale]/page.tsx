import { useTranslations } from "next-intl"


import { Header, Hero } from "@/components"

export default function Page() {
  const t = useTranslations('Basic');
  return (
    <div>
      <Header />
      <main className="flex w-desktop min-h-screen flex-col items-center justify-between p-24 sm:px-6">
        <Hero />
      </main>
    </div>
  );
}

