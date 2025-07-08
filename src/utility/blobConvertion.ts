interface ImageBlobUrl {
  (imagePath: string): Promise<string>;
}

const createImageBlobUrl: ImageBlobUrl = async (imagePath: string): Promise<string> => {
  const response: Response = await fetch(imagePath);
  const blob: Blob = await response.blob();
  return URL.createObjectURL(blob);
};

export { createImageBlobUrl };
