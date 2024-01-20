export function formatName(name) {
  const n = name?.split(" ");

  if (n.length >= 2) {
    return `${n[0].charAt(0).toUpperCase() + n[0].slice(1)} ${
      n[1].charAt(0).toUpperCase() + n[1].slice(1)
    }`;
  }

  const match = name.match(/^([a-zA-Z\s]+)(?:@|.|$)/);

  if (match) {
    return match[1].charAt(0).toUpperCase() + match[1].slice(1);
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}
