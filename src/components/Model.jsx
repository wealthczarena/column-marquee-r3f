import { useGLTF, InstancedMesh } from "@react-three/drei"
import { useRef, useEffect } from "react"

const Model = ({ instanceCount, spacing }) => {

    const model = useGLTF('./bunny_can.glb')
    const modelRef = useRef()

    // Rotating the model
    useEffect(() => {
        const modelObject = modelRef.current
        modelObject.rotation.y = Math.PI

        // console.log('Loaded model:', model)
    }, [model])

    // Creating a grid with instancing
    return <>
        <InstancedMesh 
        ref={modelRef} 
        args={[
            model.scene.children[0].geometry, 
            model.scene.children[0].material,
            instanceCount
        ]} >
            
        </InstancedMesh>

        <primitive 
            object={ model.scene } 
            ref={ modelRef } 
            scale={ 1, 1, 1 }
        />
    </>
}

export default Model


