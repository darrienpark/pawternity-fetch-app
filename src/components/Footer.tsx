import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="bg-[#193d2a] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
        <p className="text-lg font-semibold">Darrien Park</p>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/darrien-park/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/darrienpark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="GitHub Profile"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </div>

        <p className="text-sm text-center">
          Built using <span className="font-semibold">React</span>, <span className="font-semibold">Redux</span>,{" "}
          <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Vite</span>,{" "}
          <span className="font-semibold">TailwindCSS</span>, and <span className="font-semibold">MUI</span>.
        </p>
      </div>
    </footer>
  );
}
