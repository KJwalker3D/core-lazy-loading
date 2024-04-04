import { Transform, engine } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { createLazyArea } from './scene1'


// THE SHOPS ARE THE TRIGGER BOXES


export function creatAllLazyAreas() {
  const lazyParent = engine.addEntity()

  Transform.create(lazyParent, {
    position: Vector3.create(0, 0, 0),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1)
  })

  const shopBlack = engine.addEntity()
  Transform.create(shopBlack, {
    position: Vector3.create(26, 0, 8),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1),
    parent: lazyParent
  })

  const shopBlack2 = engine.addEntity()
  Transform.create(shopBlack2, {
    position: Vector3.create(16, 0, 8),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1),
    parent: lazyParent
  })


  const shopBlack3 = engine.addEntity()
  Transform.create(shopBlack3, {
    position: Vector3.create(4, 0, 8),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1),
    parent: lazyParent
  })


  const shopBlack4 = engine.addEntity()
  Transform.create(shopBlack4, {
    position: Vector3.create(26, 0, 25),
    rotation: Quaternion.create(7.362779683899381e-15, 1, -1.1920927533992653e-7, 2.980232238769531e-8),
    scale: Vector3.create(1, 1, 1),
    parent: lazyParent
  })


  const shopBlack5 = engine.addEntity()
  Transform.create(shopBlack5, {
    position: Vector3.create(16, 0, 25),
    rotation: Quaternion.create(7.362779683899381e-15, 1, -1.1920927533992653e-7, 2.980232238769531e-8),
    scale: Vector3.create(1, 1, 1),
    parent: lazyParent
  })


  const shopBlack6 = engine.addEntity()
  Transform.create(shopBlack6, {
    position: Vector3.create(5, 0, 25),
    rotation: Quaternion.create(7.362779683899381e-15, 1, -1.1920927533992653e-7, 2.980232238769531e-8),
    scale: Vector3.create(1, 1, 1),
    parent: lazyParent
  })

  createLazyArea(shopBlack, 6)
  createLazyArea(shopBlack2, 5)
  createLazyArea(shopBlack3, 4)
  createLazyArea(shopBlack4, 3)
  createLazyArea(shopBlack5, 2)
  createLazyArea(shopBlack6, 1)

}
