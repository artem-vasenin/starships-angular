export interface IShip {
  MGLT?: string;
  cargo_capacity?: string;
  consumables?: string;
  cost_in_credits?: string;
  created?: string;
  crew?: string;
  edited?: string;
  films?: string[];
  hyperdrive_rating?: string;
  length?: string;
  manufacturer?: string;
  max_atmosphering_speed?: string;
  model?: string;
  name?: string;
  passengers?: string;
  pilots?: []
  starship_class?: string;
  url?: string;
}

export interface IShipsQuery {
  count: number;
  next: string | null;
  previous: string | null;
  results: IShip[];
}
