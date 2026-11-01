import { createFileRoute } from "@tanstack/react-router";
import SpeedValve from "@/pages/SpeedValve";

export const Route = createFileRoute("/speed-valve/")({
  component: SpeedValve,
});
