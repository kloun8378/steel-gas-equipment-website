import { createFileRoute } from "@tanstack/react-router";
import SpeedValveDU32 from "@/pages/SpeedValveDU32";

export const Route = createFileRoute("/speed-valve/tpa11-032")({
  component: SpeedValveDU32,
});
