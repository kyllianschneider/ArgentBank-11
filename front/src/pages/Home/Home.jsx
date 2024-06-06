import Banner from "../../components/Banner/Banner";
import featuresData from "../../components/Features/featuresData.json";
import Features from "../../components/Features/Features";

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresData.map((element) => <Features element={element} key={element.title} />)}
      </section>
    </main>
  );
};

export default Home;
