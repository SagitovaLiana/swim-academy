import "./Video.css";

const Video = ({ src }) => {
  return (
        <section className="video">
          <div className="container  video__container">
              <video
                className="video__video"
                src={src}
                autoPlay
                muted
                playsInline
                controls
              />
          </div>
        </section>
  );
};

export default Video;
