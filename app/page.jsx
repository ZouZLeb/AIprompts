import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Dicover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI powered prompt</span>
      </h1>
      <p className="desc text-center">
        This is an open-source AI prompting tool for people to discover, create
        and share AI prompts that they generate
      </p>
      <Feed />
    </section>
  );
};

export default Home;
