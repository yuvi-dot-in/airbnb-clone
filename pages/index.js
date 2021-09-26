import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="bg-white">
      <Head>
        <title>Yuvi Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-max mx-auto  ">
        <section className="pt-6 pl-4">
          <h2 className=" text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data from server */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {exploreData.map((item) => (
              <SmallCard
                location={item.location}
                distance={item.distance}
                imageUrl={item.img}
                key={item.img}
              />
            ))}
          </div>
        </section>

        <section className="pl-4">
          <h2 className=" text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex overflow-scroll scrollbar-hide ">
            {cardsData.map((item) => (
              <MediumCard img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Explore and Experience "
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
