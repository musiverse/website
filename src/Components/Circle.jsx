const Circle = () => {
  return (
    <div className="relative ">
      <div className="absolute-center">
        <svg className="circle-svg" viewBox="0 0 200 200">
          <defs>
            <path
              d="M100,100c0-40,32-72,72-72s72,32,72,72s-32,72-72,72S100,140,100,100"
              id="textcircle_top"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="20s"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                repeatCount="indefinite"
              />
            </path>
          </defs>
          <text className="circle-text" dy="20" textLength="440">
            <textPath xlinkHref="#textcircle_top">
              View Our Showreels View Our Showreels
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute-center">
        <div className="showreels-div">
          <video className="showreels-video" loop autoPlay muted>
            <source
              src="https://github.com/ahampriyanshu/gfg/raw/main/media/showreel.mp4"
              type="video/mp4"
            />
            <p>Please Update Your Browser</p>
          </video>
          <img
            alt="play"
            className="showreels-btn"
            src="https://github.com/ahampriyanshu/gfg/raw/main/media/play.png"
          />
        </div>
      </div>
    </div>
  );
};
export default Circle;
