export async function GET() {
  const username = "abhay877";

  const query = `
    query {
      matchedUser(username: "${username}") {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
    });

  if (!res.ok) {
    return Response.json(
      { error: "Unable to fetch LeetCode" },
      { status: 500 }
    );
  }

  const data = await res.json();

  const stats =
    data.data.matchedUser.submitStats.acSubmissionNum;

  const all = stats.find((s: any) => s.difficulty === "All");
  const easy = stats.find((s: any) => s.difficulty === "Easy");
  const medium = stats.find((s: any) => s.difficulty === "Medium");
  const hard = stats.find((s: any) => s.difficulty === "Hard");

  return Response.json({
    solved: all.count,
    easy: easy.count,
    medium: medium.count,
    hard: hard.count,
  });
}