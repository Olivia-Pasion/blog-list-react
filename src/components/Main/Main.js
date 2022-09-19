import BlogCard from '../BlogCard/BlogCard.js';
import { useBlogs } from '../../hooks/useBlogs';

export default function Main() {
  const { filterBlogs } = useBlogs();

  return (
    <main>
      {filterBlogs().map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </main>
  );
}