import './PostCard.css'
export default function PostCard(props) {
  const post = props.post;

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small>Post #{post.id} · User {post.userId}</small>
    </div>
  );
}