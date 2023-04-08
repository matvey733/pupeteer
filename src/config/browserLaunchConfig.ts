import { PuppeteerLaunchOptions } from "puppeteer";

const windowWidth = 1920;
const windowHeight = 1080;

const browserLaunchConfig: PuppeteerLaunchOptions = {
  headless: true,
    args: [`--window-size=${windowWidth},${windowHeight}`],
    defaultViewport: {
      width: windowWidth,
      height: windowHeight
    },
    userDataDir: "./tmp"
}

export default browserLaunchConfig;