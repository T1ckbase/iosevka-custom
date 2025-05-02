import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const res = await octokit.repos.getLatestRelease({
  owner: 'be5invis',
  repo: 'Iosevka',
});

console.log(res.data.tag_name);

const kv = await Deno.openKv();
