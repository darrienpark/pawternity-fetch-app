import Benefits from "../components/benefits/Benefits";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Layout>
          <Benefits></Benefits>
        </Layout>
      </section>
    </>
  );
};

export default HomePage;
