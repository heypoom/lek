export interface Cell {
  // UUID of the cell
  id: string

  // Volume of the cell in the femtoliters unit (1e-15 L)
  // Length of the cell is derived by the volume
  volume: number
}
