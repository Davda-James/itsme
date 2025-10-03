import { writeFileSync , readFileSync, existsSync } from "fs";
import path from "path";

interface githubAPIResponse {
  items: Array<{
    repository_url: string;
    html_url: string;
    title: string;
    status: string;
    closed_at: string;
  }>
}

const token = process.env.GITHUB_TOKEN!;
const username = "Davda-James";
const now = new Date().toISOString();

const lastPRDate = new Date("Oct 2, 2025, 11:07:00 GMT+5:30");
let lastRun = new Date(lastPRDate.getTime() - 1000).toISOString(); 

if (existsSync(".last_run")) {
  lastRun = readFileSync(".last_run", "utf-8");
}

const url = `https://api.github.com/search/issues?q=is:pr+is:merged+author:${username}+merged:>${lastRun}&sort=created&order=desc&per_page=100`;

const res = await fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
  },
});


console.log(res)

if (!res.ok) {
  console.error("Failed");
  process.exit(1);
}

const data = await res.json();
const prs = data.items || [];

const componentPath = path.join(
  process.cwd(),
  "src/components/OpenSourceContributions.tsx"
);

let componentContent = readFileSync(componentPath, "utf-8");

const contributionsArrayRegex = /const contributions = \[(.|\n)*?\];/m;
const match = componentContent.match(contributionsArrayRegex);

if (!match) {
  console.error("Could not find contributions array in the component.");
  process.exit(1);
}

const existingArrayContent = match[0].slice(
  match[0].indexOf("[") + 1,
  match[0].lastIndexOf("]")
).trim();

const existingURLs = new Set(
  existingArrayContent
    .split("\n")
    .filter((line) => line.includes("url:"))
    .map((line) => line.match(/url:\s*"(.+?)"/)?.[1])
    .filter(Boolean)
);

const newContributionsString = prs
  .filter((pr: githubAPIResponse["items"][number]) => !existingURLs.has(pr.html_url))
  .map(
    (pr: githubAPIResponse["items"][number]) =>
      `\t{\n\t\trepo: "${pr.repository_url.replace(
        "https://api.github.com/repos/",
        ""
      )}",\n\t\ttitle: "${pr.title.replace(/"/g, '\\"')}",\n\t\turl: "${
        pr.html_url
      }",\n\t\tstatus: "merged",\n\t\tdate: "${new Date(
        pr.closed_at
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}"\n\t}`
  )
  .join(",\n");

const updatedArrayString = `const contributions = [
${newContributionsString}${existingArrayContent ? ",\n\t" + existingArrayContent : ""}
];`;

componentContent = componentContent.replace(contributionsArrayRegex, updatedArrayString);

writeFileSync(componentPath, componentContent, "utf-8");
console.log(`Appended ${prs.length} new PRs.`);

writeFileSync(".last_run", now, "utf-8");
console.log(`Updated .last_run to ${now}`);