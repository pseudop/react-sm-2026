import type { IPost, IQueryLiteReturn } from "../types";

const Posts = ({ data: posts, isPending=false, error=null }: IQueryLiteReturn) => {
  console.log(posts)
  return (
    <div>
      { error && <p style={{ color: '#d66' }}>Error: {error}</p> }
      { isPending && <p>Loading posts...</p> }
      <ul>
      { posts && posts.map((post: IPost) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      )) }
      </ul>
    </div>
  );
}

export default Posts;
