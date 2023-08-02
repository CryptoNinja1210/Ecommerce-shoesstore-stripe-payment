export const getDiscountedPricePercentage = (originalPrice, discountPrice) => {
  const discount = originalPrice - discountPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return discountPercentage.toFixed(2);
};
