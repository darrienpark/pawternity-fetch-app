import Header from "../components/header/Navbar";
import Layout from "../components/Layout";
import NoResults from "../components/NoResults";

export default function ErrorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Layout>
        <NoResults
          title="Uh-oh, Page Not Found"
          description="We couldn’t find the page you were looking for. It might have been moved or deleted—please explore our site to find what you need."
        />
      </Layout>
    </div>
  );
}
