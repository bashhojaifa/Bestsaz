import featureIconData from "./feature-icon.json";

const FeatureIcon = () => {
  return (
    <div className="support-area pt-100 pb-60">
      <div className="container">
        <div className="row">
          {featureIconData?.map((singleFeature) => (
            <div className="col-lg-3 col-sm-6" key={singleFeature.id}>
              <div className="support-wrap mb-30">
                <div className="support-icon">
                  <img
                    className="animated"
                    src={process.env.PUBLIC_URL + singleFeature.image}
                    alt=""
                  />
                </div>
                <div className="support-content">
                  <h5>{singleFeature.title}</h5>
                  <p>{singleFeature.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureIcon;
