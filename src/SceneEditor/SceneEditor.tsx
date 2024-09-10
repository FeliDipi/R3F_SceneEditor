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
  isHelpersActive: boolean;
}

export const SceneEditor = ({ children }: any) => {
  const [objects, setSceneObjects] = useState<any[]>([]);
  const [isHelpersActive, setHelpersActive] = useState<boolean>(true);

  const handleSceneObjects = (objects: any[]) => {
    const newObjects: any[] = objects.filter(
      (obj) => !obj.type.includes("Helper")
    );
    setSceneObjects(newObjects);
  };

  const getProps = (object: any) => {
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
        isHelpersActive,
      }}
    >
      {children}
      <div className={style.editorUI}>
        <Draggable>
          <div className={`${style.contentUI} ${style.hover}`}>
            {objects.map((obj, idx) => (
              <PropertyContent key={idx} info={getProps(obj)} />
            ))}
          </div>
        </Draggable>
        <button
          className={`${style.helpersButton} ${style.hover}`}
          onClick={() => setHelpersActive(!isHelpersActive)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m12 2l4 4h-3v7.85l6.53 3.76L21 15.03l1.5 5.47l-5.5 1.46l1.53-2.61L12 15.58l-6.53 3.77L7 21.96L1.5 20.5L3 15.03l1.47 2.58L11 13.85V6H8zm9 3h-2V3h2zm1 5v2h-4v-2h1V8h-1V6h3v4z"
            />
          </svg>
        </button>
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
