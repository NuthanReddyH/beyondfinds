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