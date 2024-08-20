import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  event: EventoEvent;
};

const EventCard = ({ event }: Props) => {
  return (
    <Link href={`/event/${event.slug}`}>
      <div className="bg-white/[3%] rounded-lg overflow-hidden relative">
        <div className="relative w-full h-48">
          <Image
            src={event.imageUrl}
            alt={event.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full transform transition-transform duration-300 
          ease-in-out hover:scale-110 hover:cursor-pointer"
          />
        </div>

        <div className=" p-6 text-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <div
          className="absolute top-3 left-3 bg-black/30 backdrop-blur 
      px-3 py-1 rounded-lg flex flex-col items-center"
        >
          <p className="text-xl font-bold">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">Nov</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
