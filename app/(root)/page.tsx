import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/types";

const Page = async ({ searchParams }: { searchParams: { query?: string } }) => {
  const query = (await searchParams).query;

  const posts: StartupCardType[] = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image: "https://source.unsplash.com/random/?robots",
      title: "We Robots",
      category: "Robots",
      type: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br /> Connect with Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches, and get notice in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Showing results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Page;
