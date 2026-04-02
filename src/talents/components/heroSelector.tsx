"use client";

import { useRouter } from "next/navigation";
import { heroMapping } from "@/src/talents/data/heroes/heroMapping";
import { useMemo } from "react";

export default function HeroSelector({ currentHero }: { currentHero: string }) {
  const router = useRouter();

  const heroes = useMemo(() => {
    return Object.entries(heroMapping)
      .sort(([, a], [, b]) => a.title.localeCompare(b.title));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newHero = e.target.value;

    router.push(`/talents/${newHero}`);
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3 w-full">
      <label className="hidden sm:block text-white/70 text-sm font-medium">
        Select Talenttree for:
      </label>

      <div className="relative">
        <select
          value={currentHero}
          onChange={handleChange}
          className="
            w-full sm:w-auto
            appearance-none
            bg-black/60 backdrop-blur-md
            text-white
            px-4 py-2 lg:pr-10
            rounded-xl
            border border-white/60
            shadow-lg
            hover:bg-black/70
            focus:outline-none focus:ring-2 focus:ring-white/20
            transition-all
            cursor-pointer
          "
        >
          {heroes.map(([key, hero]) => (
            <option key={key} value={key}>
              {hero.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/50">
          ▼
        </div>
      </div>
    </div>
  );
}