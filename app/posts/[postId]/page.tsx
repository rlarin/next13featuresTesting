import fetcher from '../../../libs/fetcher';
import Image from 'next/image';

const API_URL = process.env.API_URL;

const PostPage = async ({
  params,
  searchParams,
}: {
  params: {postId: string};
  searchParams: {id: string};
}) => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  // throw new Error('Error from PostPage');
  const [post, comments] = await Promise.all([
    fetcher(`${API_URL}/posts/${params.postId}`),
    fetcher(`${API_URL}/posts/${params.postId}/comments`),
  ]);

  return (
    <>
      <h1>Post {params.postId}</h1>
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>

      <h2>Comments</h2>
      <ul>
        {comments.map((comment: any) => (
          <div
            key={comment.id}
            style={{
              backgroundColor: '#f4f4f4',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '10px',
              color: '#222222',
            }}>
            <Image
              src={`https://avatars.dicebear.com/api/personas/${comment.name}.svg`}
              alt={comment.name}
              width={100}
              height={100}
            />

            <li style={{listStyle: 'none'}}>
              <h3>{comment.name}</h3>
              <small>{comment.email}</small>
              <p>{comment.body}</p>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default PostPage;
