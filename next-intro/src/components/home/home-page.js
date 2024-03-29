import Image from "next/image";
import Link from "next/link";

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((ev) => (
        <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className="card" href={`/events/${ev.id}`}>
            <div className="image">
              <Image width={400} height={400} alt={ev.title} src={ev.image} />
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
