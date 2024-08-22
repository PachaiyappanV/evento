import { getEvents } from "@/lib/utils";
import EventCard from "./EventCard";

type Props = {
  city: string;
};

const EventsList = async ({ city }: Props) => {
  const events = await getEvents(city);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8  min-w-full mt-20">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};
export default EventsList;
