import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};
const EventPage = async ({ params: { slug } }: Props) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  return (
    <main>
      <section className="relative w-full h-[361px] overflow-hidden">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          objectFit="cover"
          className=""
        />
      </section>
    </main>
  );
};

export default EventPage;
