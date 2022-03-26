export interface EColiConfig {
	/* Growth rate in reactions per minute */
	growthRate: number;

	/** Initial volume in femtoliters */
	volume: number;

	/** Cell division size */
	divisionSize: {
		mean: number;
		variance: number;
	};

	/** Diameter in micrometers */
	diameter: number;

	/** Pixels per micrometers */
	scale: number;
}
