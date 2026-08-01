import { NextResponse } from "next/server";

const query = `
query($login: String!) {
  user(login: $login) {
    followers {
      totalCount
    }

    following {
      totalCount
    }

    repositories(ownerAffiliations: OWNER, first: 100) {
      totalCount

      nodes {
        name
        stargazerCount

        languages(first:10){
          edges{
            size
            node{
              name
            }
          }
        }
      }
    }

    contributionsCollection {
      contributionCalendar {
        totalContributions

        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export async function GET() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login: "Abhay8777",
      },
    }),
    cache: "no-store",
  });

  const json = await response.json();

  if (json.errors) {
    return NextResponse.json(json);
  }

  const user = json.data.user;

  const languages: Record<string, number> = {};

  user.repositories.nodes.forEach((repo: any) => {
    repo.languages.edges.forEach((lang: any) => {
      languages[lang.node.name] =
        (languages[lang.node.name] || 0) + lang.size;
    });
  });

  const topLanguages = Object.entries(languages)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 6);

  const topRepos = [...user.repositories.nodes]
    .sort((a: any, b: any) => b.stargazerCount - a.stargazerCount)
    .slice(0, 6);

  return NextResponse.json({
    contributions:
      user.contributionsCollection.contributionCalendar.totalContributions,

    calendar:
      user.contributionsCollection.contributionCalendar.weeks,

    followers:
      user.followers.totalCount,

    following:
      user.following.totalCount,

    repositories:
      user.repositories.totalCount,

    topLanguages,

    topRepos,
  });
}