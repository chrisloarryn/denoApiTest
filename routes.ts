import { Router } from "https://deno.land/x/oak/mod.ts";

import { getDinosaurs, createDinosaur } from "./controllers/dinosaurController.ts";

const router = new Router();

router
  .get("/dinosaurs", getDinosaurs)
  .post("/dinosaurs", createDinosaur);

export default router;
