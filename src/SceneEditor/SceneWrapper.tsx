import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { radToDeg } from "three/src/math/MathUtils.js";
import { useSceneEditor } from "./SceneEditor";

const SceneWrapper = ({ children }) => {
  const { scene } = useThree();
  const { setScene, updateInfo } = useSceneEditor();

  useEffect(() => {
    if (!scene) return;

    setScene(scene);
  }, [scene]);

  useFrame(() => {
    if (scene) {
      const obj = scene.children[0];

      const newInfo = {
        name: obj.name,
        position: obj.position.clone(),
        rotation: new Vector3(
          radToDeg(obj.rotation.x),
          radToDeg(obj.rotation.y),
          radToDeg(obj.rotation.z)
        ),
        scale: obj.scale.clone(),
      };

      updateInfo(newInfo);
    }
  });

  return <>{children}</>;
};

export default SceneWrapper;
