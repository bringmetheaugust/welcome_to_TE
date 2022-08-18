import { useMouseEnter } from "./hooks/use-mouse-enter";

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  const [mouseEnterHandler, isActive] = useMouseEnter(mouseEnterCallbak);

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  const [mouseEnterHandler, isActive] = useMouseEnter(mouseEnterCallbak);

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <p>{content}</p>
    </div>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  const [mouseEnterHandler, isActive] = useMouseEnter(mouseEnterCallbak);

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </div>
  );
};
