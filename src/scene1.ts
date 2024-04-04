import { Entity, MeshRenderer, Transform, VisibilityComponent, engine } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { SubSceneComp } from './components'
import { nftCollection, createPainting, NFTdata } from './nft'
import * as utils from '@dcl-sdk/utils'

export let scene1active = true


export function createLazyArea(parentPos: Entity, id: number) {
  const entity = engine.addEntity()

  Transform.create(entity, {
    parent: parentPos
  })
 

  const box = engine.addEntity()
  Transform.create(box, { parent: parentPos, scale: Vector3.create(8, 5, 14) })

  let createdPaintings: Entity[] = []


  utils.triggers.addTrigger(
    box,
    utils.LAYER_2,
    utils.LAYER_1,
    [{ type: 'box', scale: Vector3.create(8, 5, 14) }],
    () => {
      if (scene1active) {
        console.log(`ACTIVE`)
        console.log(`ENTERED ` + id)
        createdPaintings = []
        for (const nft of nftCollection) {
          if (nft.room === id) {
            const painting = createPainting(undefined, nft.id, nft.position, nft.contract, nft.tokenId)
            createdPaintings.push(painting)
          }
        }
      }
    },
    () => {
      console.log('LEFT')
      for (const painting of createdPaintings) {
        engine.removeEntity(painting)
      }

      createdPaintings = [] // Clear the array
    }
  )
  utils.triggers.enableDebugDraw(true)

  return entity
}
