import { engine, Schemas } from '@dcl/sdk/ecs'

const SubScene = {
  originalPos: Schemas.Vector3,
  showing: Schemas.Boolean
}


export const SubSceneComp = engine.defineComponent('Subscene', SubScene)
