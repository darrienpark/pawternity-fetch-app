import Benefits from "../components/benefits/Benefits";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import NotificationSnackbar from "../components/Notification";

export default function HomePage() {
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
      <NotificationSnackbar />
    </>
  );
}
