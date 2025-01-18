import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '../_components/NewsList';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList();

  return <NewsList news={news} />;
}
