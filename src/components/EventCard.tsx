import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type Props = {
  event: EventoEvent;
};

const EventCard = ({ event }: Props) => {
  return (
    <div className="bg-white/[3%] rounded-lg overflow-hidden">
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
        <h2>{event.name}</h2>
        <p>{event.organizerName}</p>
        <p>{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
