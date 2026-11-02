import PostCard from "./PostCard";

export default function PostList(props) {
  return (
    
    <div className="posts-container">
      {props.posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  );
}