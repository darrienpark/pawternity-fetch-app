import Benefits from "../components/benefits/Benefits";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import NotificationSnackbar from "../components/NotificationSnackbar";
import { useAppSelector, useAppDispatch } from "../hooks/useStoreHooks";
import { authActions } from "../store/store";

const HomePage = () => {
  const snackbar = useAppSelector((state) => state.authentication.snackbar);
  const dispatch = useAppDispatch();

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

      {snackbar && (
        <NotificationSnackbar
          autohideDuration={5000}
          message={snackbar.message}
          open={!!snackbar}
          onClose={() => dispatch(authActions.setSnackbar(null))}
          variant={snackbar!.type}
        />
      )}
    </>
  );
};

export default HomePage;
