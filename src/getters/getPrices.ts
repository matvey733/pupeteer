import { ElementHandle, Page } from "puppeteer";
import { fractionPriceSelector, wholePriceSelector } from "../utils/selectors";

export default async function getPrices(page: Page, productsHandle: ElementHandle[]) {
  const prices: number[] = [];

  for (const productHandle of productsHandle) {
    const price = await page.evaluate(
      (product, wholePriceSelector, fractionPriceSelector) => {
        const priceWhole = product.querySelector(wholePriceSelector)?.textContent;
        const priceFraction = product.querySelector(fractionPriceSelector)?.textContent;
        const price = `${priceWhole}${priceFraction}`;
        return parseFloat(price);
      },
      productHandle,
      wholePriceSelector,
      fractionPriceSelector
    )
    
    prices.push(price);
  }

  return prices;
}