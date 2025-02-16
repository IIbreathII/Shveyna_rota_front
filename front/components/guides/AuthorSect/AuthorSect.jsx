import "./AuthorSect.css";

const AuthorSect = ({ masterClassData }) => {
  return (
    <section className="author">
      <div className="author__container">
        <h2>Автори лекал:</h2>
        <div className="author__list">
          {masterClassData.authors.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorSect;
