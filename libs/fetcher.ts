const fetcher = async (url: string) =>
  fetch(url, {
    next: {
      revalidate: 60,
    },
  }).then((r) => r.json());

export default fetcher;
