import { createFileRoute } from "@tanstack/react-router";
import SpeedValveDU50 from "@/pages/SpeedValveDU50";

export const Route = createFileRoute("/speed-valve/tpa11-050")({
  component: SpeedValveDU50,
});
