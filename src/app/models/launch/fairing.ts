export interface Fairing {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ship: string;
}