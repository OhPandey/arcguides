import RecommendedSelector from "@/src/talents/components/recommendSelector";
import TalentRenderer from "@/src/talents/components/talentRenderer";
import { recommended } from "@/src/talents/data/builds/recommended";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Recommended Builds",
};

interface PageProps {
  params: {
    heroName: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(recommended).map(heroName => ({ heroName }));
}

export default async function TalentsPage({ params }: PageProps) {
  const { heroName } = await params;

  if (!recommended[heroName])
    redirect("/");

  return (
    <main className="max-w-6xl mx-auto p-6">
      <RecommendedSelector
        currentHero={heroName}
      />
      <hr className="my-6 border-white/60" />
      <TalentRenderer
        heroName={heroName}
        isRecommended={true}
        allowEdit={false}
        initSelectedTalentNodes={{}}
      />
    </main>
  );
}