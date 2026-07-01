export const RESUME_FILE_NAME = "Muhammad Numan-Full Stack Developer-1.pdf";
export const RESUME_DOWNLOAD_NAME = "Muhammad Numan - Full Stack Developer Resume.pdf";

export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = `/${encodeURIComponent(RESUME_FILE_NAME)}`;
  link.download = RESUME_DOWNLOAD_NAME;
  link.click();
};
