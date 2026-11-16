import { useEffect, useRef } from "react";
import "../styles/Cursor.css";

export default function Cursor() {
  //Tạo biến tham chiếu cho con tro
  const dotRef = useRef(); //Quản lý chấm tím ở giữa
  const ringRef = useRef(); //Quản lý vòng tròn phát sáng bên ngoài

  // Thiết lập hiệu ứng con trỏ
  useEffect(() => {
    // Chỉ kích hoạt trên thiết bị có chuột đối với desktop thì có pointer:fine
    if (!window.matchMedia("(pointer:fine").matches) return;

    const dot = dotRef.current; //.current giúp truy cập trực tiếp phần tử DOM mà useRef đang quản lý.
    const ring = ringRef.current; //.current giúp truy cập trực tiếp phần tử DOM mà useRef đang quản lý.

    // Xử lý tọa độ di chuyển của chuột
    const handleMove = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    // Xử lý khi con hover chuột
    const handleOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]"); // e.target là tìm các phần tử HTML đang đc trỏ tới , .closest Tìm phần tử gần nhất khớp với selector
      // Xử lý hiệu ứng khi user tương tác
      if (target) {
        ring.classList.add("cursor_hover");

        const text = target.dataset.cursorText || "";
        ring.dataset.text = text;
        ring.classList.toggle("has-text", !!text);
      }
    };

    //Xử lý khi con out chuột

    const handleOut = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");

      if (target) {
        ring.classList.remove("cursor-hover", "has-text");
        ring.dataset.text = "";
      }
    };

    // Ẩn hiện con trỏ
    const handleLeave = () => {
      dot.classList.add("cursor-hidden");
      ring.classList.add("cursor-hidden");
    };
    const handleEnter = () => {
      dot.classList.remove("cursor-hidden");
      ring.classList.remove("cursor-hidden");
    };

    // Tạo Dom sự kiện
    document.addEventListener("pointermove", handleMove); //Chuột di chuyển
    document.addEventListener("pointerover", handleOver); //Chuột đi vào phần tử
    document.addEventListener("pointerout", handleOut); //Chuột rời phần tử
    document.addEventListener("pointerleave", handleLeave); //Chuột rời khỏi trang
    document.addEventListener("pointerenter", handleEnter); //Chuột quay lại trang

    // Dọn dẹp sự kiện

    return () => {
      document.removeEventListener("pointermove", handleMove); //Chuột di chuyển
      document.removeEventListener("pointerover", handleOver); //Chuột đi vào phần tử
      document.removeEventListener("pointerout", handleOut); //Chuột rời phần tử
      document.removeEventListener("pointerleave", handleLeave); //Chuột rời khỏi trang
      document.removeEventListener("pointerenter", handleEnter); //Chuột quay lại trang
    };
  }, []);
  if (
    typeof window !== "undefined" &&
    !window.matchMedia("(pointer: fine)").matches
  ) {
    return null;
  }
  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
