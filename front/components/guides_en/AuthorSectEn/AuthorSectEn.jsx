import "./AuthorSect.css";

const AuthorSectEn = ({ masterClassData }) => {
  return (
    <section className="author">
      <div className="author__container">
        <h2>Authors of templates:</h2>
        <div className="author__list">
          {masterClassData.authors_en.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorSectEn;
