import "../styles/ScrollIndicator.css";

export default function ScrollIndicator() {
  return (
    <>
      <a href="#about" className="ScrollIndicator" aria-label="Cuộn xuống">
        <span className="mouse">
          <span className="mouseDot"></span>
        </span>
      </a>
    </>
  );
}
