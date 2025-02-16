import "./DetailsSect.css";

const DetailsSect = ({ masterClassData }) => {
  return (
    <section className="details">
      <div className="details__container">
        <h2>Деталі майстер-класу</h2>
        <p>{masterClassData.details}</p>
        <p>{masterClassData.summary}</p>
      </div>
    </section>
  );
};

export default DetailsSect;
