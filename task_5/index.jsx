import { useState } from "react";
// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState } from "react";

import { CommonBlock } from "./taskComponents";

const infoArr = [
  {
    id: 1,
    mouseEnterCallbak: () => console.log("hi from Block 1"),
    imgSrc:
      "https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35",
    imgAlt: "my picture",
  },
  {
    id: 2,
    mouseEnterCallbak: () => console.log("hi from Block 2"),
    content: "Magdalena",
  },
  {
    id: 3,
    mouseEnterCallbak: () => console.log("hi from Block 3"),
    userData: { country: "USA", street: "Maskavas" },
  },
];

function App() {
  return (
    <Fragment>
      {infoArr.map((item) => (
        <CommonBlock key={item.id} item={item} />
      ))}
    </Fragment>
  );
}

export const CommonBlock = (props) => {
  const { item } = props;
  const { mouseEnterCallbak, userData, content, imgSrc, imgAlt } = item;
  // console.log(item);
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} />}
      {content && <p>{content}</p>}
      {userData && (
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      )}
    </div>
  );
};
