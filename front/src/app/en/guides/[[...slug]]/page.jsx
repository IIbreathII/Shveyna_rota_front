"use client";

import { useEffect, useRef, useState } from "react";
import "$style/Guides.css";
import VideoSect from "$component/guides/VideoSect/VideoSect";
import Questions from "$component/guides/Questions/Questions";
import { useParams } from "next/navigation";
import { getData, getEnData } from "api";
import MasterClassSectEn from "$component/guides_en/MasterClassSectEn/MasterClassSectEn";
import ExamplesSectEn from "$component/guides_en/ExamplesSectEn/ExamplesSectEn";
import DetailsSectEn from "$component/guides_en/DetailsSectEn/DetailsSectEn";
import AuthorSectEn from "$component/guides_en/AuthorSectEn/AuthorSectEn";

export default function MasterClassPage() {
  const [categories, setCategories] = useState([]);
  const [guidesData, setGuidesData] = useState({});

  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    getEnData("categories", setCategories);
  }, []);

  useEffect(() => {
    if (!slug && categories.length > 0) {
      const firstCategory = categories[0];
      if (firstCategory?.subcategories?.length > 0) {
        getEnData(
          `subcategories/${firstCategory.subcategories[0].id}`,
          setGuidesData
        );
      }
    }
    if (slug) {
      getEnData(`subcategories/${slug[1]}`, setGuidesData);
    }
  }, [categories, slug]);

  return (
    <div className="guides-container">
      <div className="container">
        <Questions />
        <main className="main-content">
          {guidesData.authors_en ? (
            <>
              <MasterClassSectEn masterClassData={guidesData} />
              <VideoSect masterClassData={guidesData} />
              <ExamplesSectEn masterClassData={guidesData} />
              <DetailsSectEn masterClassData={guidesData} />
              <AuthorSectEn masterClassData={guidesData} />
            </>
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
  
}
