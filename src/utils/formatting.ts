export function nameToUsername(name:string) {
  return name.toLowerCase().replace(/\s+/g, '_');
}