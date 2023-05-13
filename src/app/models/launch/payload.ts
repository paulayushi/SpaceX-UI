import { OrbitParam } from "./orbit-param";

export interface Payload {
    payload_id: string;
    norad_id: number[];
    cap_serial: string;
    reused: boolean | null;
    customers: string[];
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number | null;
    payload_mass_lbs: number | null;
    orbit: string;
    orbit_params: OrbitParam;
    mass_returned_kg: number | null;
    mass_returned_lbs: number | null;
    flight_time_sec: number | null;
    cargo_manifest: string;
}