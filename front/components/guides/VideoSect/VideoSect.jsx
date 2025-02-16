import { useLang } from "$component/Context/LangContext";
import "./VideoSect.css"

const VideoSect = ({ masterClassData }) => {
  const { lang } = useLang();

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  return (
    <section className="video">
      <div className="video__container">
        <h2>{lang == "ua" ? "Майстер-клас" : "Master class"}</h2>
        <div className="video__body">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="video__media">
            {isValidUrl(masterClassData.url)
              ?<iframe
              frameBorder="0"
              src={masterClassData.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
              : <div>Не вдалося завнтажити відео</div>
            }
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSect;
