import { EventoEvent } from "@/lib/types";
import EventCard from "./EventCard";

type Props = {
  city: string;
};

const EventsList = async ({ city }: Props) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8  min-w-full mt-20">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};
export default EventsList;
