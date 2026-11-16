// import Image from "../assets/1.png";
import Img5 from "../assets/5.png";
import "../styles/Home.css";
import Atropos from "atropos/react";
import "atropos/css";
import { motion } from "motion/react";
import Waves from "../components/Waves/Waves";
export default function Home() {
  const jobTile = [
    { tile: "Frontend Developer" },
    { tile: "UI/UX Designer" },
    { tile: "E-Learning Specialist" },
  ];
  return (
    <>
      <div className="homeContainer">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <section className="home" id="home">
            <div
              className="homeWaves"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Waves
                lineColor="#ffffff"
                spacing={12}
                amplitude={28}
                twist={1}
                speed={1.6}
                mouseRadius={175}
                mouseStrength={1}
                accentColor="#ecd7ffc8"
                lineStyle="dashed"
                rotation={1}
              />
            </div>
            <div className="homeIntro">
              <p>👋 Xin chào! Mình là</p>
              <h2>NGUYỄN CHÍ VĨ</h2>
            </div>

            <div className="image">
              <Atropos
                className="characterAtropos"
                activeOffset={20}
                shadow={false}
                highlight={false}
                rotateXMax={5}
                rotateYMax={5}
                duration={400}
              >
                <img src={Img5} alt="Ảnh đại diện" />
              </Atropos>
            </div>

            <div className="homeTitleJob">
              {jobTile.map((item) => (
                <h2 key={item.tile}>{item.tile}</h2>
              ))}
            </div>
          </section>
        </motion.section>
      </div>
    </>
  );
}
