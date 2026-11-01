import { createFileRoute } from "@tanstack/react-router";
import Flanges from "@/pages/Flanges";

export const Route = createFileRoute("/flanges/")({
  component: Flanges,
});
