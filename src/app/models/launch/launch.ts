import { Rocket } from "./rocket";
import { Telemetry } from "./telemetry";
import { LaunchSite } from "./launch-site";
import { Link } from "./link";
import { Timeline } from "./timeline";

export interface Launch {
    flight_number: number | null;
    mission_name: string;
    mission_id: string[];
    launch_year: string;
    launch_date_unix: number | null;
    launch_date_utc: string | null;
    launch_date_local: string | null;
    is_tentative: boolean | null;
    tentative_max_precision: string;
    tbd: boolean | null;
    launch_window: number | null;
    rocket: Rocket | null;
    ships: string[];
    telemetry: Telemetry | null;
    launch_site: LaunchSite;
    launch_success: boolean | null;
    links: Link;
    details: string;
    upcoming: boolean | null;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    timeline: Timeline | null;
    crew: string[];
    last_date_update: string | null;
    last_ll_launch_date: string | null;
    last_ll_update: string | null;
    last_wiki_launch_date: string | null;
    last_wiki_revision: string | null;
    last_wiki_update: string;
    launch_date_source: string;
}