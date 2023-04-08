import puppeteer, { Page } from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import browserLaunchConfig from "./config/browserLaunchConfig";
import { productsSelector } from "./utils/selectors";
import prompt from "./utils/prompt";
import getTitles from "./getters/getTitles";
import saveToFile from "./utils/saveToFile";
import getPrices from "./getters/getPrices";


(async () => {
  const url = await prompt("amazon search results page url:\n");

  const browser = await puppeteer.launch(browserLaunchConfig);
  const page = await browser.newPage();
  await page.goto(url);
  
  const productsHandle = await page.$$(productsSelector);
  const titles = await getTitles(page, productsHandle);
  console.log(titles);
  const prices = await getPrices(page, productsHandle);

  console.log(prices);

  await browser.close()
})();

