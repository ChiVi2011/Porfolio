import Img7 from "../assets/8.png";
import "../styles/Project.css";
export default function Project() {
  return (
    <>
      {" "}
      <div
        className="project"
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <p>Cho tui ý tưởng với!!!!</p>
        <img src={Img7} alt="" />
      </div>
    </>
  );
}
