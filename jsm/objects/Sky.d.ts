import {
	BoxGeometry,
	Mesh,
	ShaderMaterial
} from '../../../src/Three';

// Clase del Cielo con su geometría triangular y shader los cuáles serán setteados en "Sky.js" e Index.html
export class Sky extends Mesh {

	constructor();

	geometry: BoxGeometry;
	material: ShaderMaterial;

	static SkyShader: object;

}
