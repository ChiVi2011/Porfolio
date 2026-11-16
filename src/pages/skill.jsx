import Img6 from "../assets/6.png";
import "../styles/Skill.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Skill() {
  const iconlogo = [
    {
      Title: "Photoshop",
      src: new URL("../assets/pts.png", import.meta.url).href,
      className: "photoshop",
    },
    {
      Title: "AdobeIlustrator",
      className: "illustrator",
      src: new URL("../assets/ai.png", import.meta.url).href,
    },
    {
      Title: "Storyline3",
      src: new URL("../assets/stotyline.png", import.meta.url).href,
    },
    {
      Title: "Storyline3",
      src: new URL("../assets/pr.png", import.meta.url).href,
    },
    {
      Title: "Figma",
      src: new URL("../assets/figma.png", import.meta.url).href,
    },
    {
      Title: "React",
      src: new URL("../assets/reace.png", import.meta.url).href,
    },
    {
      Title: "java",
      src: new URL("../assets/java.png", import.meta.url).href,
    },
    {
      Title: "git",
      src: new URL("../assets/github-logo.png", import.meta.url).href,
    },
  ];
  AOS.init();
  return (
    <>
      <div className="myskill">
        <div className="skil_img">
          <img src={Img6} alt="" data-aos="zoom-in-up" />
        </div>
        <div className="logo_skill">
          {iconlogo.map((item, index) => (
            <img
              src={item.src}
              alt={item.Title}
              key={index}
              className={item.className}
              data-aos="zoom-in-up"
            />
          ))}
        </div>
      </div>
    </>
  );
}
