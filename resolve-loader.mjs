import { fileURLToPath, pathToFileURL } from "url";

export function resolve(specifier, context, defaultResolve) {
  if (!specifier.endsWith(".js") && !specifier.startsWith("node:")) {
    return defaultResolve(specifier + ".js", context, defaultResolve);
  }
  return defaultResolve(specifier, context, defaultResolve);
}
