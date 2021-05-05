import Social from "../../images/social.png";

function SocialLife() {
  return (
    <div>
    <img
      className="ml-3"
      src={Social}
      alt="Social"
      style={{
        height: "80px",
        borderRadius: "10px",
        position: "absolute",
        top: "-10px",
        left: "-5px",
        zIndex: "1"
      }}
    />
    </div>
  );
}

export default SocialLife;
