import { Vector3 } from "three";
import Draggable from "./Draggable";
import style from "./SceneEditor.module.scss";

import { createContext, useContext, useState } from "react";
import PropertyContent from "./PropertyContent";
import { radToDeg } from "three/src/math/MathUtils.js";

const SceneEditorContext = createContext<SceneEditorProps | undefined>(
  undefined
);

export interface ObjectsDataProps {
  id: string;
  name: string;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
}

interface SceneEditorProps {
  handleSceneObjects: (objects: any[]) => void;
}

export const SceneEditor = ({ children }: any) => {
  const [objects, setSceneObjects] = useState<any[]>([]);

  const handleSceneObjects = (objects: any[]) => {
    const newObjects: any[] = [...objects];
    setSceneObjects(newObjects);
  };

  const getProps = (object: any) => {
    console.log(object);

    const objProps: ObjectsDataProps = {
      id: object.uuid,
      name: object.type,
      position: object.position.clone(),
      rotation: new Vector3(
        radToDeg(object.rotation.x),
        radToDeg(object.rotation.y),
        radToDeg(object.rotation.z)
      ),
      scale: object.scale.clone(),
    };

    return objProps;
  };

  return (
    <SceneEditorContext.Provider
      value={{
        handleSceneObjects,
      }}
    >
      {children}
      <div className={style.editorUI}>
        <Draggable>
          <div className={style.contentUI}>
            {objects.map((obj, idx) => (
              <PropertyContent key={idx} info={getProps(obj)} />
            ))}
          </div>
        </Draggable>
      </div>
    </SceneEditorContext.Provider>
  );
};

export const useSceneEditor = () => {
  const context = useContext(SceneEditorContext);
  if (!context) {
    throw new Error("useSceneEditor must be inside of SceneEditorContext");
  }
  return context;
};
