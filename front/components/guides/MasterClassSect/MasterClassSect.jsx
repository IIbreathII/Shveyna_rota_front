import { useEffect, useState } from "react";
import "./MasterClassSect.css";
import Link from "next/link";

const MasterClassSect = ({ masterClassData }) => {
  const [invalidLinks, setInvalidLinks] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkLinks = async () => {
      const results = {};

      await Promise.all(
        masterClassData.lekala.map(async (lekalo) => {
          const url = `https://drive.google.com/file/d/${lekalo.path}/view?usp=sharing`;
          try {
            const response = await fetch(url, { method: "HEAD" });
            if (!response.ok) {
              results[lekalo.path] = true;
            }
          } catch {
            results[lekalo.path] = true;
          }
        })
      );

      setLoaded(true);
      setInvalidLinks(results);
    };

    checkLinks();
  }, [masterClassData.lekala]);

  return (
    <section className="master-class">
      <div className="masterclass-title-container">
        <h1 className="masterclass-title">
          {masterClassData.subcategory}
        </h1>
      </div>
      
      <div className="masterclass-subcategory-container">
        <h2>Лекала</h2>

        {loaded ? (
          <ul>
            {masterClassData.lekala.map((lekalo, index) => {
              const url = `https://drive.google.com/file/d/${lekalo.path}/view?usp=sharing`;
              const isInvalid = invalidLinks[lekalo.path];

              return (
                <li key={index}>
                  {lekalo.text} -{" "}
                  <Link
                    className={isInvalid ? "lekala-link invalid-link" : "lekala-link"}
                    href={url}
                    target="_blank"
                  >
                    {isInvalid ? "<Файл не доступний>" : "завантажити"}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>Завантаження...</div>
        )}
      </div>



    </section>

  );
};

export default MasterClassSect;