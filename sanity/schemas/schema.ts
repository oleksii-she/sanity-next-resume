import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { heroSchema } from "./Hero";
import { aboutMe } from "./aboutMe";
import { localeString, localeText, localeArrayBlock } from "./localeType";
import { articleType } from "./articleType";
import { userCard } from "./profile";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    localeArrayBlock,
    heroSchema,
    userCard,
    aboutMe,
  ],
};
