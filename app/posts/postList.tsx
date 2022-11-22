import Card from './components/card';
import fetcher from '../../libs/fetcher';

const API_URL = process.env.API_URL;

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostList() {
  const posts: PostProps[] = await fetcher(`${API_URL}/posts`);

  return posts.map(({id, body, title}: PostProps) => (
    <Card id={id.toString()} title={title} key={id} />
  ));
}
