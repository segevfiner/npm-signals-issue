import { execa } from "execa";
import { setTimeout as timeout } from "timers/promises";

void (async () => {
  const proc = execa("npm", ["run", process.argv[2] ?? 'child1'], {
    stdio: "inherit",
    reject: false,
  });
  await timeout(2000);
  proc.kill("SIGTERM", { forceKillAfterTimeout: false });
  console.log(await proc);
})();
