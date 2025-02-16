import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./Aside.css";
import "./Toggle_Button.css"
import "./Menu_Links.css";
import "./Aside_spoiler.css";
import Spoller from "./Spoiler/Spoller";
import Link from "next/link";

const AsideEn = ({ categories }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const urlId = pathSegments[pathSegments.length - 1];

  const [activeLink, setActiveLink] = useState(null);
  const [openCategories, setOpenCategories] = useState(new Set());
  const [isOpen, setIsOpen] = useState(true);
  const [isNonActiveHovered, setIsNonActiveHovered] = useState(false);

  // Ссылки на контейнер прокрутки и активный элемент
  const asideContentRef = useRef(null);
  const activeLinkRef = useRef(null);

  // Определяем активную ссылку по URL или по первой подкатегории
  useEffect(() => {
    let newActiveLink = null;
    if (urlId && !isNaN(urlId)) {
      newActiveLink = urlId;
    } else if (categories.length > 0) {
      for (const category of categories) {
        if (category.subcategories.length > 0) {
          newActiveLink = category.subcategories[0].id;
          break;
        }
      }
    }
    setActiveLink(newActiveLink);
  }, [urlId, categories]);

  // Открываем ту категорию, где находится активная подкатегория
  useEffect(() => {
    if (activeLink) {
      let newOpenCategories = new Set();
      for (const category of categories) {
        if (category.subcategories.some((sub) => sub.id == activeLink)) {
          newOpenCategories.add(category.id);
          break;
        }
      }
      setOpenCategories(newOpenCategories);
    }
  }, [activeLink, categories]);

  // Прокрутка контейнера так, чтобы активный элемент оказался по центру.
  // Задержка 300 мс позволяет дождаться завершения анимации открытия Spoller (если она есть)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeLinkRef.current && asideContentRef.current) {
        const activeRect = activeLinkRef.current.getBoundingClientRect();
        const containerRect = asideContentRef.current.getBoundingClientRect();
        const offset = activeRect.top - containerRect.top;
        const newScrollTop = offset - containerRect.height / 2 + activeRect.height / 2;
        asideContentRef.current.scrollTo({
          top: newScrollTop,
          behavior: "smooth",
        });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [activeLink]);

  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <aside
      className={`aside ${isOpen ? "open" : "closed"} ${
        isNonActiveHovered ? "nonActiveHovered" : ""
      }`}
    >
      {/* Кнопка сворачивания */}
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <div className={`toggle-icon ${isOpen ? "rotated" : ""}`}></div>
      </button>

      {/* Контейнер с прокруткой */}
      <div className="aside-content" ref={asideContentRef}>
        {categories.map((category) => {
          const isActiveCategory = category.subcategories.some(
            (sub) => sub.id == activeLink
          );

          return category.subcategories.length > 0 ? (
            <Spoller
              key={category.id}
              title={category.category_en}
              isActiveCategory={isActiveCategory}
            >
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/guides/${sub.subcategory_en.toLowerCase()}/${sub.id}`}
                  className={`spoller__link ${activeLink == sub.id ? "active" : ""}`}
                  onClick={() => setActiveLink(sub.id)}
                  // Привязываем ref только к активной ссылке
                  ref={activeLink == sub.id ? activeLinkRef : null}
                  onMouseEnter={() => {
                    if (activeLink !== sub.id) {
                      setIsNonActiveHovered(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (activeLink !== sub.id) {
                      setIsNonActiveHovered(false);
                    }
                  }}
                >
                  {sub.subcategory_en}
                  {activeLink == sub.id && <span className="indicator"></span>}
                </Link>
              ))}
            </Spoller>
          ) : null;
        })}
      </div>
    </aside>
  );
};

export default AsideEn;
