import { RouterContext } from "https://deno.land/x/oak/mod.ts";

import DinosaurService from "../services/DinosaurService.ts";

const dinosaurService = new DinosaurService();

export const getDinosaurs = async (context: RouterContext) => {
  context.response.body = await dinosaurService.getDinosaurs();
};

export const createDinosaur = async (context: RouterContext) => {
  const { request, response } = context;

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid dino data" };
    return;
  }

  const { value: { title, desc, types } } = await request.body();

  const dinosaurId = await dinosaurService.createDinosaur(
    { title, desc, types },
  );

  response.body = { msg: "Dinosaur Created", dinosaurId };
};
