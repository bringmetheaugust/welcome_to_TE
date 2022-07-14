// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState, useEffect } from "react";

export const Block = ({
  mouseEnterCallbak,
  imgSrc,
  imgAlt,
  content,
  userData,
}) => {
  const [isActive, setActive] = useState(false);
  const [res, setRes] = useState();

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  useEffect(() => {
    if (imgSrc) {
      setRes(<img src={imgSrc} alt={imgAlt} />);
    } else if (content) {
      setRes(<p>{content}</p>);
    } else if (userData) {
      setRes(
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      );
    }
  }, [content, imgSrc, userData, imgAlt]);

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {res}
    </div>
  );
};
