import { useFrame, useThree } from "@react-three/fiber";
import { useSceneEditor } from "./SceneEditor";

const SceneWrapper = ({ children }: any) => {
  const { scene } = useThree();
  const { handleSceneObjects } = useSceneEditor();

  useFrame(() => {
    if (!scene) return;

    handleSceneObjects(scene.children);
  });

  return <>{children}</>;
};

export default SceneWrapper;
