import StatusBadge from "@/components/StatusBadge";
import type { Learner } from "@/lib/learner";

type LearnerCardProps = {
  learner: Learner;
};

export default function LearnerCard({ learner }: LearnerCardProps) {
  const status =
    learner.submissionRate !== null && learner.submissionRate >= 70
      ? "on-track"
      : "at-risk";
  const rate =
    learner.submissionRate === null
      ? "0%"
      : `${learner.submissionRate.toFixed(1)}%`;

  return (
    <article className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4">
      <div>
        <h2 className="font-medium text-slate-900">{learner.name}</h2>
        <p className="mt-1 text-sm text-slate-600">Submission rate: {rate}</p>
      </div>
      <StatusBadge status={status} />
    </article>
  );
}
