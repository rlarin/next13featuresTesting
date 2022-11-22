import PostList from './postList';

const PostsPage = () => {
  return (
    <>
      <p>Posts Page</p>

      {/* @ts-expect-error Server Component */}
      <PostList />
    </>
  );
};

export default PostsPage;
