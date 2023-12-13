const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);

export const getImage = (imageName) => {
  try {
    return images(`./${imageName}`).default;
  } catch (err) {
    console.error(`Image not found: ${imageName}`, err);
    return '';
  }
};

export const formatPrice = (price) => {
  return `CA $${parseFloat(price).toFixed(2)}`;
}

export const getImageUrl = (url) => `https://beyondfinds-api.onrender.com/${url}`;

export const getImageData = (image) => {
  if (image?.includes("images")) {
    return getImageUrl(image);
  } else {
    return getImage(image);
  }
};