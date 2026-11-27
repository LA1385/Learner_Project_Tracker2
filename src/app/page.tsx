import LearnerCard from "@/components/LearnerCard";
import { learners } from "@/lib/learner";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-8">
      <h1 className="mb-5 text-2xl font-semibold text-slate-900">Learners</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {learners.map((learner) => (
          <LearnerCard key={learner.id} learner={learner} />
        ))}
      </div>
    </section>
  );
}