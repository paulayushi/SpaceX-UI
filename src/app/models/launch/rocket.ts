import { FirstStage } from "./first-stage";
import { SecondStage } from "./second-stage";
import { Fairing } from "./fairing";

export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage | null;
    second_stage: SecondStage | null;
    fairings: Fairing;
}