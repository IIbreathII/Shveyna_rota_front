import "./DetailsSect.css";

const DetailsSectEn = ({ masterClassData }) => {
  return (
    <section className="details">
      <div className="details__container">
        <h2>Details of the master class</h2>
        <p>{masterClassData.details_en}</p>
        <p>{masterClassData.summary_en}</p>
      </div>
    </section>
  );
};

export default DetailsSectEn;
