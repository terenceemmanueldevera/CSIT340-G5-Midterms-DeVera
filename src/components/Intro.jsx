import FeatureCard from "./FeatureCard";

function Intro({author}) {
  return (
<   section>
      <p className="mb-6 text-center text-lg">
        Created by {author}
      </p>

    <main className="grid grid-cols-1 gap-8 px-6 pb-8 md:grid-cols-3 md:px-20">
      <FeatureCard
        tag="Free"
        title="Open source"
        description="Read the code and use it in any project."
      />

      <FeatureCard
        tag="Small"
        title="Lightweight"
        description="Import only the components the page uses."
      />

      <FeatureCard
        tag="Simple"
        title="Easy to learn"
        description="Every component takes a few plain props."
      />
    </main>
    </section>
  );
}

export default Intro;
