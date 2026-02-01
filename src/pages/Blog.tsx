import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Hacktoberfest x2: My Hacktoberfest Journey",
    date: "Jan 31, 2026",
    url: "https://medium.com/@jrdavda007/hacktoberfest-x2-my-hacktoberfest-journey-f1e70bad527b",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-3xl mx-auto px-6 pt-12 pb-8 flex flex-col">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Blogs</h1>
            <Link to="/" className="text-sm text-muted-foreground hover:underline">
              Back Home
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">My writings and thoughts</p>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {blogs.map((blog, idx) => (
            <article key={idx} className="py-6 first:pt-0">
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group hover:opacity-80 transition-opacity"
              >
                <span className="text-lg font-medium group-hover:underline">
                  {blog.title}
                </span>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {blog.date}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
