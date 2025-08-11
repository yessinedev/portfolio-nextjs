import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111418] text-white px-4">
      <h1 className="text-3xl font-bold mb-3">Project Not Found</h1>
      <p className="text-gray-400 mb-6">
        The project you&apos;re looking for doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/projects"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
      >
        View all projects
      </Link>
    </div>
  );
}
