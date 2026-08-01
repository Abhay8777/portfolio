export async function GET() {
  const username = "mishraabg3kx";

  try {
    const res = await fetch(
      `https://gfg-stats.tashif.codes/${username}/stats`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return Response.json(
        { error: "Unable to fetch GFG" },
        { status: 500 }
      );
    }

    const json = await res.json();

    return Response.json({
      solved: json.data.totalSolved,
      easy: json.data.byDifficulty.easy,
      medium: json.data.byDifficulty.medium,
    });
  } catch {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}