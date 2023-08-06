import PortfolioBox from "./portfolio-box";
import full1 from "../../public/portfolio/thumbnails/1.png";
import full2 from "../../public/portfolio/thumbnails/2.png";
import full3 from "../../public/portfolio/thumbnails/3.png";
import full4 from "../../public/portfolio/thumbnails/4.png";
import full5 from "../../public/portfolio/thumbnails/5.png";
import full6 from "../../public/portfolio/thumbnails/6.png";

const portfolio = [
  {
    id: 1,
    desc: "pork ribs in a to-go box",
    link: "/portfolio/fullsize/1.png",
    thumb: full1,
    name: "4th Annual Slanted Field of Dreams Invitational Rib Cook-off",
    cat: "2nd Place",
  },
  {
    id: 2,
    desc: "ribs on the smoker",
    link: "/portfolio/fullsize/2.png",
    thumb: full2,
    name: "Battle of the BBQs 2019",
    cat: "1st Place",
  },
  {
    id: 3,
    desc: "juicy, cut, tri-tip on a cutting board",
    link: "/portfolio/fullsize/3.png",
    thumb: full3,
    name: "Backyard with friends",
    cat: "Just having some fun",
  },
  {
    id: 4,
    desc: "tri-tip on a cutting board",
    link: "/portfolio/fullsize/4.png",
    thumb: full4,
    name: "Home Sweet Home",
    cat: "Perfecting the art",
  },
  {
    id: 5,
    desc: "pork ribs on smoker",
    link: "/portfolio/fullsize/5.png",
    thumb: full5,
    name: "Favorite Place on Earth",
    cat: "Workin'",
  },
  {
    id: 6,
    desc: "mac and cheese in cast iron pan",
    link: "/portfolio/fullsize/6.png",
    thumb: full6,
    name: "Homestyle",
    cat: "Savory",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container-fluid pt-2 pb-2">
        <div className="row g-0">
          {portfolio.map((item) => (
            <PortfolioBox
              key={item.id}
              imageDesc={item.desc}
              imageLink={item.link}
              thumb={item.thumb}
              name={item.name}
              category={item.cat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
