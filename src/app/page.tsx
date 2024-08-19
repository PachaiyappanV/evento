import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col mt-28 items-center px-3">
      <h1 className="font-bold tracking-tight text-3xl lg:text-6xl ">
        Find events around you
      </h1>
      <p className="mt-7 mb-12 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="italic underline text-accent font-bold">10,000</span>{" "}
        events around you
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
