function Template(props) {
  return (
    <section>
      <div className="site-image-container">
        <img className="site-image" src={`images/${props.cardImg.src}`} />
      </div>

      <div className="details-container">
        <div className="site-details-section">
          <div className="gps-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="18"
              viewBox="0 0 384 512"
            >
              !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
              License - https://fontawesome.com/license/free Copyright 2025
              Fonticons, Inc.
              <path
                fill="#f55a5a"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            <span className="country">{props.country}</span>
          </div>
          <a className="location-url" href={props.gps} target="_blank">
            View on Google Maps
          </a>
        </div>

        <div>
          <h1 className="site">{props.site}</h1>
        </div>

        <div>
          <span className="date">{props.date}</span>
        </div>

        <div>
          <span className="site-description">{props.description}</span>
        </div>
      </div>
      <br />
    </section>
  );
}
export default Template;
