import { createFileRoute } from "@tanstack/react-router";
import ServiceUnavailable from "@/pages/ServiceUnavailable";

export const Route = createFileRoute("/service-unavailable")({
  head: () => ({
    meta: [{ title: "СтальПроКлапан — скоростные и предохранительные клапаны СУГ, Барнаул" }],
  }),
  component: ServiceUnavailable,
});
