import Container from "@/components/Container";
import Header from "@/components/Header";
import PostCoverImage from "@/components/PostCoverImage";
import PostFeatured from "@/components/PostFeatured";
import PostHeading from "@/components/PostHeading";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <PostFeatured />
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8 ">Footer</p>
      </footer>
    </Container>
  );
}
