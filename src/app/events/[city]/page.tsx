import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  params: {
    city: string;
  };
};
export function generateMetadata({ params: { city } }: Props): Metadata {
  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
  };
}
const EventsPage = ({ params: { city } }: Props) => {
  return (
    <main className="flex flex-col items-center py-24 px-4 md:px-6 min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" && (
          <span>
            Events in <span className="capitalize">{city}</span>
          </span>
        )}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
