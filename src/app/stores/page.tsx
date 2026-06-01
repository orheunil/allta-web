import { Screen } from "./Screen";

type Props = {
  searchParams: Promise<{
    searchTerms?: string;
  }>;
};

export default async function Stores({ searchParams }: Props) {
  const params = await searchParams;
  const searchTerms = params.searchTerms;

  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/store/web`);

  if (searchTerms) {
    url.searchParams.set("searchTerms", searchTerms);
  }

  const response = await fetch(url.toString());
  const data = await response.json();

  return <Screen data={data} />;
}
