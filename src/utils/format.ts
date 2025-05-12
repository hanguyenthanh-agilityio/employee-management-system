export const formatTitleToPath = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};
