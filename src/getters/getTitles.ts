import { ElementHandle, Page } from "puppeteer";
import { titleSelector } from "../utils/selectors";


export default async function getTitles(page: Page, productsHandle: ElementHandle[]) {
  const titles: string[] = [];

  for (const productHandle of productsHandle) {
    // callback passed to page.evaluate() is run in the context of the puppeteer webpage.
    // Because of that, variables decraled inside this file are not available to the page.evaluate() function.
    // To make them available, you should pass them as arguments and accept as parameters inside the callback.
    const title = await page.evaluate(
      (product, selector) => product.querySelector(selector)?.textContent,
      productHandle,
      titleSelector
    )

    titles.push(`${title}`);
  }

  return titles;
}