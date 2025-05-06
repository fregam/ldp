import BookClubAbout from "@/components/clubLectura/BookClubAbout";
import BookClubBooks from "@/components/clubLectura/BookClubBooks";
import BookClubHero from "@/components/clubLectura/BookClubHero";
import BookClubHow from "@/components/clubLectura/BookClubHow";
import BookClubTestimonials from "@/components/clubLectura/BookClubTestimonials";


export default function BookClubPage() {
  return (
    <main className="min-h-screen">
      <BookClubHero />
      <BookClubAbout />
      <BookClubHow />
      <BookClubBooks />
      <BookClubTestimonials />
    </main>
  )
}
