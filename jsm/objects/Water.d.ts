import {
	BufferGeometry,
	Color,
	Geometry,
	Mesh,
	Side,
	Texture,
	Vector3
} from '../../../src/Three';

// Uso y apoto de la interfaz WaterOptions para asignar propiedades a editar en nuestro mar
export interface WaterOptions {
	textureWidth?: number;
	textureHeight?: number;
	clipBias?: number;
	alpha?: number;
	time?: number;
	waterNormals?: Texture;
	sunDirection?: Vector3;
	sunColor?: Color | string | number;
	waterColor?: Color | string | number;
	eye?: Vector3;
	distortionScale?: number;
	side?: Side;
	fog?: boolean;
}

//Clase Water para instanciar el objeto correspondiente haciendo uso del elemento Mesh de Three js
export class Water extends Mesh {

	constructor( geometry: Geometry | BufferGeometry, options: WaterOptions );

}
