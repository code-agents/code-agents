import { defineConfig } from "languine";

export default defineConfig({
  version: "1.0.2",
  locale: {
    source: "en",
    targets: ["es", "ja"],
  },
  files: {
    json: {
      include: ["locales/[locale].json"],
    },
  },
  llm: {
    provider: "openai",
    model: "gpt-4-turbo",
  },

});