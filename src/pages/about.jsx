import { useState } from "react";
import "../styles/About.css";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  const [activeExperiences, setActiveExperiences] = useState(0);

  const experiences = [
    {
      period: "2021 - 2024",
      role: "Nhân viên Đào tạo - Truyền thông nội bộ",
      company: "Công ty Cổ Phần Tập Đoàn Hoa Sen",
      description: [
        "Thiết kế bài giảng SCORM, quản trị LMS và tối ưu trải nghiệm học tập trực tuyến.",
        "Hỗ trợ tuyển dụng, phân tích thị trường lao động và phát triển nguồn ứng viên tiềm năng.",
        "Thiết kế hình ảnh, video và phát triển nội dung truyền thông, thương hiệu tuyển dụng Hoa Sen Home.",
      ],
    },
    {
      period: "2024 - Nay",
      role: "Chuyên viên Thiết Kế E-Learning",
      company: "Công ty Cổ Phần Sữa VitaDairy Việt Nam",
      description: [
        "Phối hợp triển khai đào tạo trực tiếp, số hóa nội dung học liệu trên nền tảng E-Learning bằng Articulate Storyline 3.",
        "Biên tập video đào tạo, video ngắn và học liệu truyền thông nội bộ.",
        "Thiết kế UI/UX LMS, quản trị dữ liệu học tập và tối ưu quy trình đào tạo trực tuyến.",
      ],
    },
  ];
  const changeExperiences = (index) => {
    setActiveExperiences(index);
  };
  AOS.init();
  return (
    <>
      <section className="about" id="about">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about_me">
            <div className="image_about">
              <button
                className="about_arrow_prev"
                aria-label="Nội dung trước"
                type="button"
                onClick={() => changeExperiences(0)}
                disabled={activeExperiences === 0}
              >
                <ChevronLeft />
              </button>
              <img
                src={activeExperiences === 0 ? Image2 : Image3}
                alt={activeExperiences === 0 ? "About Me" : "Work Experience"}
                className={
                  activeExperiences === 0 ? "about_image" : "experience_image"
                }
                key={activeExperiences}
                data-aos="fade-right"
              />
            </div>
            <div className="content_about" data-aos="fade-left">
              <div>
                {activeExperiences === 0 ? (
                  <>
                    <span className="about_label">ABOUT ME</span>
                    <span className="about_title">
                      Xin chào, mình là
                      <h1> Chí Vĩ</h1>
                    </span>
                    <p className="about_description">
                      Với hơn 5 năm kinh nghiệm trong lĩnh vực Đào tạo và Phát
                      triển (L&D), mình chuyên về thiết kế E-Learning và phát
                      triển trải nghiệm học tập số. Bên cạnh đó, mình theo đuổi
                      Fullstack Development và UI/UX Design, kết hợp tư duy hệ
                      thống, công nghệ và sáng tạo để xây dựng những sản phẩm
                      trực quan, tối ưu trải nghiệm và mang lại giá trị thực
                      tiễn.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="about_label" data-aos="fade-left">
                      EXPERIENCES
                    </span>
                    <h1 className="about_title" data-aos="fade-left">
                      Hành trình <span>công việc</span>
                    </h1>
                    <div className="work_experiences" data-aos="fade-left">
                      {experiences.map((experience) => (
                        <div className="work_timeline" key={experience.company}>
                          <span className="work_item">{experience.period}</span>

                          <div className="work_info">
                            <p>{experience.company}</p>
                            <h3>{experience.role}</h3>
                          </div>

                          <ul className="work_description">
                            {experience.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <button
                className="about_arrow_next"
                aria-label="Nội dung tiếp theo"
                type="button"
                onClick={() => changeExperiences(1)}
                disabled={activeExperiences === 1}
              >
                <ChevronRight size={26} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
