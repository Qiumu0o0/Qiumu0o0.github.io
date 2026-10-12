import { execFileSync } from 'node:child_process';

export default function remarkGitDate() {
  return (_, file) => {
    try {
      const updatedDate = execFileSync(
        'git',
        ['log', '-1', '--format=%cI', '--', file.path],
        { encoding: 'utf8' }
      ).trim();

      if (updatedDate) file.data.astro.frontmatter.updatedDate = updatedDate;
    } catch {
      // Keep the frontmatter date when Git history is unavailable.
    }
  };
}
