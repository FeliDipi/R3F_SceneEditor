import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshLambertMaterial } from "three";
import { SceneEditor } from "./SceneEditor/SceneEditor";
import SceneWrapper from "./SceneEditor/SceneWrapper";

const App = () => {
  return (
    <div className="App">
      <SceneEditor>
        <Canvas className="canvas">
          <SceneWrapper>
            <PerspectiveCamera position={[0, 0, 10]} fov={30} makeDefault />
            <OrbitControls />
            <ambientLight intensity={1} />
            <pointLight position={[3, 3, 0]} intensity={10} />
            <Sphere
              position={[0, 0, 0]}
              material={new MeshLambertMaterial({ color: "red" })}
            />
          </SceneWrapper>
        </Canvas>
      </SceneEditor>
    </div>
  );
};

export default App;
