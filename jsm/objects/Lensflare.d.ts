import {
	Mesh,
	Texture,
	Color
} from '../../../src/Three';

// Clase exportada de Three js para modificar la interpretación de la luz por parte de la cámara
export class LensflareElement {

	constructor( texture: Texture, size?: number, distance?: number, color?: Color );
	texture: Texture;
	size: number;
	distance: number;
	color: Color;

}

// Se habilita que el efecto de luz entre por el lente de la cámara
export class Lensflare extends Mesh {

	constructor();
	readonly isLensflare: true;

	addElement( element: LensflareElement ): void;
	dispose(): void;

}
