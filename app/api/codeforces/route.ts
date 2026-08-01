export async function GET() {
  const handle = "abhay8777";

  try {
    const res = await fetch(
      `https://codeforces.com/api/user.status?handle=${handle}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return Response.json(
        { error: "Unable to fetch Codeforces" },
        { status: 500 }
      );
    }

    const data = await res.json();

    const solved = new Set<string>();

    for (const submission of data.result) {
      if (submission.verdict === "OK") {
        solved.add(
          `${submission.problem.contestId}-${submission.problem.index}`
        );
      }
    }

    return Response.json({
      solved: solved.size,
    });
  } catch {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}