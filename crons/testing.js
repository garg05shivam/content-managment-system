import cron from "node-cron";

export const testing = () => {
  console.log("Testing cron initialized...");

  cron.schedule("36 15 * * *", () => {
    console.log("running testing");
  });
};
