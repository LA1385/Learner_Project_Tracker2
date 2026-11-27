export type LearnerStatus = "on-track" | "at-risk";

type StatusBadgeProps = {
  status: LearnerStatus;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`rounded px-2 py-1 text-xs ${
        status === "on-track"
          ? "bg-green-50 text-green-700"
          : "bg-amber-50 text-amber-700"
      }`}
    >
      {status === "on-track" ? "On track" : "At risk"}
    </span>
  );
}
