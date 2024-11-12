import SearchForm from "@/components/SearchForm";

const Page = async ({ searchParams }: { searchParams: { query?: string } }) => {
  const query = (await searchParams).query;

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
    </>
  );
};

export default Page;
