"use client";

type Day = {
  contributionCount: number;
  date: string;
};

type Week = {
  contributionDays: Day[];
};

export default function ContributionGraph({
  calendar,
}: {
  calendar?: Week[];
}) {
  if (!calendar || calendar.length === 0) {
    return (
      <div className="text-gray-400">
        No contribution data found.
      </div>
    );
  }

  const getColor = (count: number) => {
    if (count === 0) return "#161b22";
    if (count <= 2) return "#0e4429";
    if (count <= 5) return "#006d32";
    if (count <= 10) return "#26a641";
    return "#39d353";
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[4px] min-w-max">
        {calendar.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[4px]">
            {week.contributionDays.map((day) => (
              <div
                key={day.date}
                title={`${day.date} • ${day.contributionCount} contributions`}
                className="w-4 h-4 rounded-sm border border-[#30363d] transition-all duration-200 hover:scale-125"
                style={{
                  backgroundColor: getColor(day.contributionCount),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}