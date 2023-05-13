export interface Core {
    core_serial: string;
    flight: number | null;
    block: number | null;
    gridfins: boolean | null;
    legs: boolean | null;
    reused: boolean | null;
    land_success: boolean | null;
    landing_intent: boolean | null;
    landing_type: string;
    landing_vehicle: string;
}