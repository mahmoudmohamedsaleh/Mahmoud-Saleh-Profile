import { spawn } from "child_process";

const pythonProcess = spawn("python", ["main.py"], {
  cwd: process.cwd(),
  stdio: "inherit",
  env: { ...process.env, PORT: process.env.PORT || "5000" }
});

pythonProcess.on("error", (err) => {
  console.error("Failed to start Flask:", err);
  process.exit(1);
});

pythonProcess.on("close", (code) => {
  console.log(`Flask process exited with code ${code}`);
  process.exit(code || 0);
});

process.on("SIGTERM", () => {
  pythonProcess.kill("SIGTERM");
});

process.on("SIGINT", () => {
  pythonProcess.kill("SIGINT");
});
