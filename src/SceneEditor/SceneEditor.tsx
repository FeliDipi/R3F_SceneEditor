import { Scene } from "three";
import Draggable from "./Draggable";
import style from "./SceneEditor.module.scss";

import { createContext, useContext, useState } from "react";

const SceneEditorContext = createContext(null);

export const SceneEditor = ({ children }) => {
  const [scene, setScene] = useState<Scene>();
  const [info, setInfo] = useState<InfoProps>();

  const updateInfo = (newInfo) => {
    setInfo(newInfo);
  };

  return (
    <SceneEditorContext.Provider
      value={{
        setScene,
        updateInfo,
      }}
    >
      {children}
      <div className={style.editorUI}>
        <Draggable>
          <div className={style.contentUI}>
            <p>Name: {info?.name}</p>
            <p>
              Position:{" "}
              {`(${info?.position.x.toFixed(1)} , ${info?.position.y.toFixed(
                1
              )} , ${info?.position.z.toFixed(1)})`}
            </p>
            <p>
              Rotation:{" "}
              {`(°${info?.rotation.x.toFixed(1)} , °${info?.rotation.y.toFixed(
                1
              )} , °${info?.rotation.z.toFixed(1)})`}
            </p>
            <p>
              Scale:{" "}
              {`(${info?.scale.x.toFixed(1)} , ${info?.scale.y.toFixed(
                1
              )} , ${info?.scale.z.toFixed(1)})`}
            </p>
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
