import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";
const navMenu = [
  { label: "Trang chủ", href: "#home" },
  { label: "Về Tôi", href: "#about" },
  { label: "Kỹ Năng", href: "#skill" },
  { label: "Dự Án", href: "#project" },
  { label: "Chứng Chỉ", href: "#certificate" },
];

export default function Navbar() {
  // Tạp biến activeMenu thêm class active
  const [activeMenu, setActiveMenu] = useState();

  //Thiết lập theo dõi các thẻ a
  useEffect(() => {
    // Tìm các thẻ NavMenu đã khai báo phía trên
    const sections = navMenu
      .map((item) => document.querySelector(item.href)) // Tìm các thẻ có id NavMenu
      .filter(Boolean); // Loại bỏ các phần tử không tìm thấy

    const observer = new IntersectionObserver( //IntersectionObserver: phát hiện section đi vào hoặc ra khỏi vùng quan sát.
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveMenu(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container">
        <nav className="navbar" data-aos="fade-down">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navMenu" data-aos="fade-down">
            {navMenu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeMenu === item.href ? "active" : ""}
                onClick={() => setActiveMenu(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="btn">Liên Hệ</button>
        </nav>
      </div>
    </>
  );
}
