import z from "zod";

const schema = z.object({
  obj: z.object(
    {
      a: z.string(),
      b: z.number(),
    },
    "Invalid object",
  ),
  arr: z.array(
    z.object(
      {
        c: z.string(),
        d: z.number(),
      },
      "Invalid array item",
    ),
  ),
});

const okay = {
  arr: [
    {
      c: undefined,
      d: undefined,
    },
  ],
};

const errors = schema.safeParse(okay).error;

console.log(errors?.issues);
