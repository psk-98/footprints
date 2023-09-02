export const getRightProductsPageImageSize = () => {
  if (window?.innerHeight >= 768 || 800) return window?.innerHeight * 0.3
  else if (window?.innerHeight >= 1024 || 800) return window?.innerHeight * 0.22
  else return window?.innerHeight * 0.47
}
