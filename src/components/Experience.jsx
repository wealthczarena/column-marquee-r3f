import Can, { Instances as CanWrapper } from "./Can";
import Lights from "./Lights";
import { OrbitControls, OrthographicCamera, Center } from "@react-three/drei";
import React, { ReactElement } from 'react'

const Experience = () => {
  const gridSize = 15
  const rowSize = 7
  const gap = 0.6

  return (
    <>
      <OrbitControls />
      <OrthographicCamera 
        makeDefault 
        position={[0, 0, 10]} 
        zoom={110}
      />
      <Lights />

      <Center>
        <CanWrapper>
          {/* Yohane's explanation */}
          {/* Creates a row of instanced Can models */}
          {/* {[1, 1, 1, 1, 1, 1].map((_, i) => {
            return <Can key={i} position={[i % 2 === 0 ? i : -i, 0, 0]} />;
          })} */}

          {/* 1st Attempt */}
          {/* Create arrays of length gridSize and rowSize */}
          {/* {Array.from({ length: gridSize }, (_, i) => (
            <React.Fragment key={i} >
              {Array.from({ length: rowSize }, (_, j) => (
                <Can 
                  key={`${i} - ${j}`}
                  position={[
                    (i - Math.floor(gridSize / 2 )) * 2,
                    0,
                    (j - Math.floor(rowSize / 2)) * 2,
                  ]}
                />
              ))}
            </React.Fragment>
          ))} */}

          {/* 2nd Attempt */}
          {Array.from({ length: gridSize }, (_, i) => (
            <React.Fragment key={i}>
              {Array.from({ length: rowSize }, (_, j) => {
                const colOffset = (i % 2 === 0) ? gap / 2 : gap / 2
                const rowOffset = (j % 2 === 0) ? gap / 2 : gap / 2
                const x = (i - Math.floor(gridSize / 2)) * 2 * gap + colOffset 
                const y = (j - Math.floor(rowSize / 2)) * 2 * gap + rowOffset 
                // const rotation = (j % 2 === 0) ? 0 : -Math.PI
                return (
                  <Can
                    key={`${i} - ${j}`}
                    position={[x, y, 0]}
                    // rotation={[0, rotation, 0]}
                  />
                )
              })}
            </React.Fragment>
          ))}
        </CanWrapper>
      </Center>
    </>
  );
};

export default Experience;
