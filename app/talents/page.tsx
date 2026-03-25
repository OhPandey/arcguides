import TalentRenderer from "@/src/talents/components/talentRenderer"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommended Builds",
};

export default function TalentsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">

      <TalentRenderer
        heroName="bumi"
        isRecommended
        allowEdit={true}
      />

    </main>
  )
}