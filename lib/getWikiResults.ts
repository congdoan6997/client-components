export default async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "extracts|pageimages",
    exchars: "200",
    explantext: "true",
    exintro: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  // console.log(searchParams);
  const url = "https://en.wikipedia.org/w/api.php?" + searchParams;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}

// getWikiResults("cats");
