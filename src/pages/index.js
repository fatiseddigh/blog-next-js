import Layout from "@/containers/Layout";
import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
  const user = useAuth();
  console.log(user);
  return (
    <Layout>
      <h1>this is home page</h1>
    </Layout>
  );
};

export default HomePage;
