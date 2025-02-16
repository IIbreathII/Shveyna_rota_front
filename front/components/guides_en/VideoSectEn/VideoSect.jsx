import "./VideoSect.css"

const VideoSect = ({ masterClassData }) => {
  return (
    <section className="video">
      <div className="video__container">
        <h2>Майстер-клас</h2>
        <div className="video__body">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="video__media">
            <iframe
              frameBorder="0"
              src={masterClassData.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSect;
