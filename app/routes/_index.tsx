import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export function loader() {
  const data = Promise.resolve("Hello World");
  return defer({ data });
}

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <Suspense>
      <Await resolve={data}>{(resolved) => resolved}</Await>
    </Suspense>
  );
}
