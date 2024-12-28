import { useQueries } from "@tanstack/react-query";
import DATA from "@data/services.json";

export const useTopStars = ({ limit }: { limit: 5 }) => {
  // Each API will be fetched in parallel
  const data = useQueries({
    queries: DATA.map((service) => ({
      queryKey: ["service", service.name],
      queryFn: async () => {
        const res = await fetch(
          `https://api.github.com/repos/${service.repo_owner}/${service.repo_name}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.PUBLIC_GITHUB_TOKEN}`,
            },
          },
        );

        if (!res.ok) {
          return null;
        }

        const json = await res.json();

        return json;
      },
    })),
  });

  const isLoading = data.some((item) => item.isLoading);
  const isError = data.some((item) => item.isError);

  const sortedData = data
    .sort(
      (a, b) =>
        (b.data?.stargazers_count ?? 0) - (a.data?.stargazers_count ?? 0),
    )
    .slice(0, limit);

  return { data: sortedData, isLoading, isError };
};
