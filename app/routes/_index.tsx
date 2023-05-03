import { Await } from "@remix-run/react";
import { Suspense } from "react";

export default function Index() {
  const data = Promise.resolve("Hello World");
  return (
    <Suspense>
      <Await resolve={data}>{(resolved) => resolved}</Await>
    </Suspense>
  );
}
