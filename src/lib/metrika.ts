const COUNTER_ID = 108507539;

type YmFn = (id: number, action: string, goal: string, params?: Record<string, unknown>) => void;

export const reachGoal = (goal: string, params?: Record<string, unknown>) => {
  try {
    const ym = (window as unknown as { ym?: YmFn }).ym;
    if (typeof ym === 'function') {
      ym(COUNTER_ID, 'reachGoal', goal, params);
    }
  } catch {
    return;
  }
};
