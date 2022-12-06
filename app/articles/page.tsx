import { Directus } from "@directus/sdk";
import directusTestimonial from "../../lib/directus";
import Image from "next/image";
import "../../styles/globals.css";
import { Testimonial } from "../../models/Testimonial";
import { Article } from "../../models/Article";

async function getData() {
  const articles = await fetch(
    process.env.NEXT_PUBLIC_DIRECTUS_URL
      ? process.env.NEXT_PUBLIC_DIRECTUS_URL + "items/testimonials"
      : ""
  );
  const res = await articles.json();

  return res.data;
}

async function getArticles() {
  const articles = await fetch(
    process.env.NEXT_PUBLIC_DIRECTUS_URL
      ? process.env.NEXT_PUBLIC_DIRECTUS_URL + "items/articles"
      : ""
  );
  const res = await articles.json();

  return res.data;
}

export default async function Page() {

  // useEffect(() => {
  //     setHydrated(true);
  // }, []);

  //   if (!hydrated) {
  //       // Returns null on first render, so the client and server match
  //       return null;
  //   }


  const data = await getData();
  const arti = await getArticles();
  console.log("data :>> ", arti);
  return (
    <div>
      {data.map((item: Testimonial, index: number) => (
        <div key={index}>
          <div>
            {" "}
            <Image
              src={process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL + item.image}
              alt="Picture of the author"
              width={70}
              height={70}
            />
          </div>
          <p>
            <i>{item.testimonial}</i>
          </p>
          <p>
            <b>
              {item.name}, {item.role} - {item.company}
            </b>
          </p>
        </div>
      ))}
      <div> ---------------- </div>
      {arti.map((item: Article, index: number) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          
        </div>
      ))}
    </div>
  );
}
