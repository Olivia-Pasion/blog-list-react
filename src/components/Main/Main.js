import BlogCard from '../BlogCard/BlogCard.js';
import { useBlogs } from '../../hooks/useBlogs';

export default function Main() {
  const { blogs } = useBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </main>
  );
}