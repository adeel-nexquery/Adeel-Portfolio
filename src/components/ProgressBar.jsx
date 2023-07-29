import React, { useEffect, useRef, useState } from "react";

const ProgressBar = ({ label, backgroundColor = "#e9ecef", visualParts = [{ percentage: "0%", color: "white" }] }) => {
  const [widths, setWidths] = useState(visualParts.map(() => "0%"));
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setWidths(visualParts.map(item => item.percentage));
        }
      });
    }, { threshold: 0.5 });

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [visualParts]);

  return (
    <div className="position-relative">
      <div className="progressLabel">{label}</div>
      <div className="progressVisualFull" style={{ backgroundColor }}>
        {visualParts.map((item, index) => (
          <div
            key={index}
            ref={progressRef}
            style={{ width: widths[index], backgroundColor: item.color }}
            className="progressVisualPart"
          >
            <span className="labell">{item.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
