import { createFileRoute } from "@tanstack/react-router";
import PumpEquipment from "@/pages/PumpEquipment";

export const Route = createFileRoute("/pump-equipment/")({
  component: PumpEquipment,
});
