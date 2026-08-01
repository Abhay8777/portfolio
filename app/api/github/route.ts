import { graphql } from "@octokit/graphql";

export async function GET() {
  try {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const data: any = await graphqlWithAuth(`
      query {
        user(login: "${process.env.GITHUB_USERNAME}") {
          followers {
            totalCount
          }

          following {
            totalCount
          }

          repositories(ownerAffiliations: OWNER) {
            totalCount
          }
        }
      }
    `);

    return Response.json({
      repos: data.user.repositories.totalCount,
      followers: data.user.followers.totalCount,
      following: data.user.following.totalCount,
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