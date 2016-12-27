import {BoxMesh, SoftMesh} from '../../index.js';

export function BOX(params, material) {
  return new (params.softbody ? SoftMesh : BoxMesh)(
    this.buildGeometry(params),
    material,
    params
  );
}