import { graphql } from "@octokit/graphql";

export async function GET() {
  try {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const username = process.env.GITHUB_USERNAME!;

    const data: any = await graphqlWithAuth(`
      query {
        user(login: "${username}") {

          followers {
            totalCount
          }

          following {
            totalCount
          }

          repositories(
            ownerAffiliations: OWNER
            isFork: false
          ) {
            totalCount
          }

          contributionsCollection {
            contributionCalendar {
              totalContributions

              weeks {
                contributionDays {
                  contributionCount
                  date
                  weekday
                  color
                }
              }
            }
          }
        }
      }
    `);

    return Response.json({
      repos: data.user.repositories.totalCount,
      followers: data.user.followers.totalCount,
      following: data.user.following.totalCount,

      totalContributions:
        data.user.contributionsCollection
          .contributionCalendar.totalContributions,

      calendar:
        data.user.contributionsCollection
          .contributionCalendar.weeks,
    });
  } catch (error) {
    console.error("GitHub Error:", error);

    return Response.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}