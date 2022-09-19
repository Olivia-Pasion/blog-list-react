import BlogCard from '../BlogCard/BlogCard.js';
import { useBlogs } from '../../hooks/useBlogs';

export default function Main() {
  const { filterBlogs, title, setTitle } = useBlogs();

  return {
    <Main>
      <select
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      >
      <option value ="all">All</option>
      </select>
      {filterBlogs().map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </Main>
  }
}