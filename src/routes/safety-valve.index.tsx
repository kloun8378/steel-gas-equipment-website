import { createFileRoute } from "@tanstack/react-router";
import SafetyValve from "@/pages/SafetyValve";

export const Route = createFileRoute("/safety-valve/")({
  component: SafetyValve,
});
