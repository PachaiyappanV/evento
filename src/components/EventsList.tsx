import { EventoEvent } from "@/lib/types";
import EventCard from "./EventCard";

type Props = {
  events: EventoEvent[];
};

const EventsList = ({ events }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6  min-w-full mt-20">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};
export default EventsList;
