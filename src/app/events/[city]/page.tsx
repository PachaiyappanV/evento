import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";

type Props = {
  params: {
    city: string;
  };
};
const EventsPage = async ({ params }: Props) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-4 md:px-6 min-h-[110vh]">
      <H1>
        {params.city === "all" && "All Events"}
        {params.city !== "all" && (
          <span>
            Events in <span className="capitalize">{params.city}</span>
          </span>
        )}
      </H1>
      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
