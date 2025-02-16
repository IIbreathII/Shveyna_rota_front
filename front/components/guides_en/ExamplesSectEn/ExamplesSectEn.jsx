import { useState } from "react";
import "./ExamplesSect.css";
import Image from "next/image";

const ExamplesSectEn = ({ masterClassData }) => {
  const [error, setError] = useState(false);

  return (
    <section className="examples">
      <div className="examples__container">
        <h2>Examples of ready-made clothes</h2>
        <div className="gallery">
          {masterClassData.example.map((exampl, index) => (
            <Image
              key={index}
              src={`http://drive.google.com/uc?export=view&id=${exampl.path}`}
              alt={exampl.text_en}
              width={356}
              height={61}
              onError={(e) => {
                setError(true);
                e.target.classList.add("image-notfound");
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSectEn;
