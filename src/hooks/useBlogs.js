import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('all');

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);

  const filterBlogs = () => {
    if (title === 'all') return blogs;
    return blogs.filter((blog) => blog.title === title);
  };

  return { filterBlogs, title, setTitle };
}