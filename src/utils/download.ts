// Create and activate downloads
export const triggerDownload = (blob: Blob, fileName: string) => {
  // Create temporary url from Blob data
  const fileURL = URL.createObjectURL(blob);

  // Create <a> ti simulate download behavior
  const link = document.createElement('a');
  link.href = fileURL;
  link.setAttribute('download', `${fileName}`);

  // Attach tag to dom, trigger click then delete
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Release after download is complete
  URL.revokeObjectURL(fileURL);
};
