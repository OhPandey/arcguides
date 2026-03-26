import HeroSelector from "@/src/talents/components/heroSelector";
import TalentRenderer from "@/src/talents/components/talentRenderer";
import { heroMapping } from "@/src/talents/data/heroes/heroMapping";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Talent Builder",
};

interface PageProps {
  params: { heroName: string };
}

export async function generateStaticParams() {
  return Object.keys(heroMapping).map((heroName) => ({
    heroName,
  }));
}

export default async function TalentsPage({ params }: PageProps) {
  const { heroName } = await params;
  

  if (!heroMapping[heroName]) {
    redirect("/");
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <HeroSelector 
        currentHero={heroName}
      />
      <hr className="my-6 border-white/60" />
      <Suspense>
          <TalentRenderer
          heroName={heroName}
          allowEdit={true}
          isRecommended={false}
          initSelectedTalentNodes={{}}
        />
      </Suspense>
    </main>
  );
}