import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "gravatar-wc",
  outputTargets: [
    { type: "dist" },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
