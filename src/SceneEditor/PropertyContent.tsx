import style from "./SceneEditor.module.scss";

import { ObjectsDataProps } from "./SceneEditor";

interface PropertyContentProps {
  info: ObjectsDataProps;
}

const PropertyContent = ({ info }: PropertyContentProps) => {
  if (info === null) return null;

  return (
    <div className={style.propertyUI}>
      <p>Name: {info.name}</p>
      <p>
        Position:{" "}
        {`(${info.position.x.toFixed(1)} , ${info.position.y.toFixed(
          1
        )} , ${info.position.z.toFixed(1)})`}
      </p>
      <p>
        Rotation:{" "}
        {`(${info.rotation.x.toFixed(1)}° , ${info.rotation.y.toFixed(
          1
        )}° , ${info.rotation.z.toFixed(1)}°)`}
      </p>
      <p>
        Scale:{" "}
        {`(${info.scale.x.toFixed(1)} , ${info.scale.y.toFixed(
          1
        )} , ${info.scale.z.toFixed(1)})`}
      </p>
    </div>
  );
};

export default PropertyContent;
