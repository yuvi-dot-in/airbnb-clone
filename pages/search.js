import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div className="h-screen">
      <Header />

      <main className="flex">
        <section className="flex-grow pt-10 px-4">
          <p className="text-xs">300+ stays for 5 number of guest</p>
          <h1 className="text-3xl font-semibold m-2 mb-6">Stays in New York</h1>
          <div className=" hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancellation Facility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
