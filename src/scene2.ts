import { Transform, engine } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { createSubScene } from './scene1'


// THE SHOPS ARE THE TRIGGER BOXES


export function createScene2() {
  const scene2 = engine.addEntity()

  Transform.create(scene2, {
    position: Vector3.create(0, 0, 0),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1)
  })

  const shopBlack = engine.addEntity()
  Transform.create(shopBlack, {
    position: Vector3.create(26, 0, 8),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1),
    parent: scene2
  })

  const shopBlack2 = engine.addEntity()
  Transform.create(shopBlack2, {
    position: Vector3.create(16, 0, 8),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1),
    parent: scene2
  })


  const shopBlack3 = engine.addEntity()
  Transform.create(shopBlack3, {
    position: Vector3.create(4, 0, 8),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1),
    parent: scene2
  })


  const shopBlack4 = engine.addEntity()
  Transform.create(shopBlack4, {
    position: Vector3.create(26, 0, 25),
    rotation: Quaternion.create(7.362779683899381e-15, 1, -1.1920927533992653e-7, 2.980232238769531e-8),
    scale: Vector3.create(1, 1, 1),
    parent: scene2
  })


  const shopBlack5 = engine.addEntity()
  Transform.create(shopBlack5, {
    position: Vector3.create(16, 0, 25),
    rotation: Quaternion.create(7.362779683899381e-15, 1, -1.1920927533992653e-7, 2.980232238769531e-8),
    scale: Vector3.create(1, 1, 1),
    parent: scene2
  })


  const shopBlack6 = engine.addEntity()
  Transform.create(shopBlack6, {
    position: Vector3.create(5, 0, 25),
    rotation: Quaternion.create(7.362779683899381e-15, 1, -1.1920927533992653e-7, 2.980232238769531e-8),
    scale: Vector3.create(1, 1, 1),
    parent: scene2
  })

  createSubScene(shopBlack, 6)
  createSubScene(shopBlack2, 5)
  createSubScene(shopBlack3, 4)
  createSubScene(shopBlack4, 3)
  createSubScene(shopBlack5, 2)
  createSubScene(shopBlack6, 1)

}
