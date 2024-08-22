import H1 from "@/components/H1";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
}

const EventPage = async ({ params: { slug } }: Props) => {
  const event = await getEvent(slug);

  return (
    <main>
      <section
        className="relative w-full h-[361px] overflow-hidden flex
      justify-center items-center py-56 lg:py-20"
      >
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          objectFit="cover"
          className="blur-2xl z-0"
        />
        <div className="relative z-1 flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75 mb-2">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1>{event.name}</H1>
            <p className=" text-xl text-white/75 mt-2">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] 
            sm:w-full py-2 border-white/10 border-2 rounded-md backdrop-blur-md
             hover:scale-105 transition"
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16 min-h-[75vh]">
        <section>
          <h2 className="text-2xl mb-2">About this event</h2>
          <p className="max-w-4xl mx-auto leading-8 text-lg text-white/75">
            {event.description}
          </p>
        </section>
        <section>
          <h2 className="text-2xl mb-2 mt-5">Location</h2>
          <p className="max-w-4xl mx-auto leading-8 text-lg text-white/75">
            {event.location}
          </p>
        </section>
      </div>
    </main>
  );
};

export default EventPage;
