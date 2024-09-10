import { useFrame, useThree } from "@react-three/fiber";
import { useSceneEditor } from "./SceneEditor";
import { OrbitControls } from "@react-three/drei";

const SceneWrapper = ({ children }: any) => {
  const { scene } = useThree();
  const { handleSceneObjects, isHelpersActive } = useSceneEditor();

  useFrame(() => {
    if (!scene) return;

    handleSceneObjects(scene.children);
  });

  return (
    <>
      {children}
      <OrbitControls />
      {isHelpersActive && (
        <>
          <axesHelper args={[4]} />
          <gridHelper args={[100, 100]} />
        </>
      )}
    </>
  );
};

export default SceneWrapper;
