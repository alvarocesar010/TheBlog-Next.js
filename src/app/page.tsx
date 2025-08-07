import Container from "@/components/Container";
import Header from "@/components/Header";
import PostHeading from "@/components/PostHeading";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section
        className="
      grid grid-cols-1 gap-8 mb-16
      sm:grid-cols-2
      group
      "
      >
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="w-full h-full group-hover:scale-105 transition object-cover object-center"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Titulo do post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm" dateTime="2025-04-20">
            20/04/205 10:00
          </time>
          <PostHeading as="h2" url="#">
            Maiores quod repudiandae velit quo
          </PostHeading>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          harum voluptates ipsa, repellendus pariatur nam nemo illum nobis
          deserunt recusandae porro repellat fugiat doloribus ut! Maiores quod
          repudiandae velit quo.
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8 ">Footer</p>
      </footer>
    </Container>
  );
}
