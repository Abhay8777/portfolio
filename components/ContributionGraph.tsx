"use client";

type Day = {
  contributionCount: number;
  date: string;
  color: string;
};

type Week = {
  contributionDays: Day[];
};

export default function ContributionGraph({
  calendar,
}: {
  calendar?: Week[];
}) {
  if (!calendar) return null;

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-[3px] bg-[#0d1117] p-4 rounded-xl">
        {calendar.map((week, index) => (
          <div
            key={index}
            className="flex flex-col gap-[3px]"
          >
            {week.contributionDays.map((day) => (
              <div
                key={day.date}
                title={`${day.date} • ${day.contributionCount} contributions`}
                className="w-[12px] h-[12px] rounded-[2px] border border-[#30363d] hover:scale-125 transition"
                style={{
                  backgroundColor: day.color,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}