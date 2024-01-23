import Can, { Instances as CanWrapper } from "./Can";
import Lights from "./Lights";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Lights />
      <CanWrapper>
        {[1, 1, 1, 1, 1, 1].map((_, i) => {
          return <Can key={i} position={[i % 2 === 0 ? i : -i, 0, 0]} />;
        })}
      </CanWrapper>
    </>
  );
};

export default Experience;
