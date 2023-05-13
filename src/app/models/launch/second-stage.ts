import { Payload } from "./payload";

export interface SecondStage {
    block: number | null;
    payloads: Payload[];
}