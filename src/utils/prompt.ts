import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export default function prompt(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    // user input is passed to resolve
    // resolve("user input");
    rl.question(prompt, resolve);
  })
}