import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";

function Search() {
  const router = useRouter();
  const { endDate, location, noOfGuest, startDate } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div className="h-screen">
      <Header />

      <main className="flex">
        <section className="flex-grow pt-10 px-4">
          <p className="text-xs">
            300+ stays - {range} - for {noOfGuest} number of guest
          </p>
          <h1 className="text-3xl font-semibold m-2 mb-6">
            Stays in {location}
          </h1>
          <div className=" hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancellation Facility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <p className="text-5xl text-center m-12">Page Under Development</p>
      <Footer />
    </div>
  );
}

export default Search;
