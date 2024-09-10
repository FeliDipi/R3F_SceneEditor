import style from "./SceneEditor.module.scss";

import { ObjectsDataProps } from "./SceneEditor";

interface PropertyContentProps {
  info: ObjectsDataProps;
}

const PropertyContent = ({ info }: PropertyContentProps) => {
  if (info === null) return null;

  return (
    <div className={style.propertyUI}>
      <p className={style.propertyName}>{info.name}</p>
      <div className={style.propertySpace}>
        <p>Position</p>
        <p>
          (<span>{info.position.x.toFixed(1)}</span> ,
          <span>{info.position.y.toFixed(1)}</span> ,
          <span>{info.position.z.toFixed(1)}</span> )
        </p>
      </div>
      <div className={style.propertySpace}>
        <p>Rotation</p>
        <p>
          (<span>{info.rotation.x.toFixed(1)}</span> ,
          <span>{info.rotation.y.toFixed(1)}</span> ,
          <span>{info.rotation.z.toFixed(1)}</span> )
        </p>
      </div>
      <div className={style.propertySpace}>
        <p>Scale</p>
        <p>
          (<span>{info.scale.x.toFixed(1)}</span> ,
          <span>{info.scale.y.toFixed(1)}</span> ,
          <span>{info.scale.z.toFixed(1)}</span> )
        </p>
      </div>
    </div>
  );
};

export default PropertyContent;
