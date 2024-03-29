import Image from "next/image";
import Link from "next/link";

const Page = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((e) => {
        return (
          <Link legacyBehavior key={e.id} href={`/events/${e.id}`}>
            <a className="card">
              <Image alt={e.title} src={e.image} width={400} height={400} />
              <h2>{e.title}</h2>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default Page;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const data = await import("../../data/data.json"); // your fetch function here

  return {
    props: {
      data: data.events_categories,
    },
  };
};
