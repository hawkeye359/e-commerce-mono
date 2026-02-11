export function zodPathToJsonPointer(zodPath: PropertyKey[]) {
  return (
    "/" +
    zodPath
      .map((part) => part.toString().replace(/~/g, "~0").replace(/\//g, "~1"))
      .join("/")
  );
}
