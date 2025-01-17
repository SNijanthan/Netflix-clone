import OpenAI from "openai";
import { OPENAI_API } from "./constant";

const openai = new OpenAI({
  apiKey: [OPENAI_API],
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
