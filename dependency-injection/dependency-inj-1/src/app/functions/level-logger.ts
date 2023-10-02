export function leveledMessage(level: number = 0, ...message: any[]) {
  let tabSpace = '      '.repeat(level);
  return [tabSpace, message];
}
