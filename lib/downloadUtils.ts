/**
 * Utility function to download a file from the public assets folder
 * @param filePath - Path to the file in the public folder (e.g., '/assets/resume/Rafiq_Sheriff_S.pdf')
 * @param fileName - Optional custom filename for the download
 */
export const downloadFile = (filePath: string, fileName?: string) => {
  try {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName || filePath.split('/').pop() || 'download';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading file:', error);
    // Fallback: open in new tab if download fails
    window.open(filePath, '_blank');
  }
};

/**
 * Download CV function specifically for the resume
 */
export const downloadCV = () => {
  downloadFile(
    '/assets/resume/Rafiq_Sheriff_S.pdf',
    'Rafiq_Sheriff_S.pdf'
  );
};
