import { NextApiResponse, NextApiRequest } from "next";
import { withFoo } from "external-lib-foo";

type NextApiRequestWithFoo = nextApiRequest & {
  foo: (bar: string) => void;
};

const handler = (req: NextApiRequestWithFoo, res: NextApiResponse) => {
  req.foo("bar");
  req.end("ok");
};

export default withFoo(handler);
