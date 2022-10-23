import { Octokit } from "octokit";
import { ChangeModel } from "~/models";

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const octokit = new Octokit({
    auth: config.GITHUB_TOKEN
  });

  const { data } = await octokit.request(
    "GET /repos/MatijaNovosel/realm-trove/releases",
    {
      owner: "MatijaNovosel",
      repo: "realm-trove"
    }
  );

  return (data as any[]).map<ChangeModel>((c) => ({
    body: c.body,
    date: c.published_at,
    version: c.tag_name
  }));
});
