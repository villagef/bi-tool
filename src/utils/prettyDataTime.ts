export const prettyDateTime = (date: string | number) => `
${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}
`;
