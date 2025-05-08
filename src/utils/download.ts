export const triggerDownload = (blob: Blob, fileName: string) => {
  const fileURL = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = fileURL;
  link.setAttribute('download', `${fileName}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(fileURL);
};
