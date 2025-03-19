// hooks/useImageUrl.js
const useImageUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_Backend_URL;

  const getFullImageUrl = (path: string) => {
    if (!path) return "";
    return path.startsWith("http") ? path : `${baseUrl}${path}`;
  };

  return getFullImageUrl;
};

export default useImageUrl;
