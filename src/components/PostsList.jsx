import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/fetchPosts";

const PostsList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchPosts("https://jsonplaceholder.typicode.com/posts?_limit=5"),
  });
  return (
    <div>
      {isLoading && <p>Loading posts...</p>}
      {isError && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
