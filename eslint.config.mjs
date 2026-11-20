import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import unicorn from "eslint-plugin-unicorn";

// `views` is the FSD pages layer; `src/pages` is reserved by Next.js.
const layers = ["app", "views", "widgets", "features", "entities", "shared"];
const publicApiPatterns = [
    "@/views/*/*",
    "@/widgets/*/*",
    "@/features/*/*",
    "@/entities/*/*",
    "@/shared/ui/*/*",
    "@/shared/lib/*/*",
];

export default defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        plugins: {
            unicorn,
        },

        rules: {
            ...unicorn.configs.recommended.rules,
            "unicorn/no-null": "off",
        },
    },
    ...layers.map((layer, index) => ({
        files: [`src/${layer}/**/*.{ts,tsx}`],
        rules: {
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: layers.slice(0, index).map(upperLayer => `@/${upperLayer}/**`),
                            message: "FSD layers can only import lower layers.",
                        },
                        ...(layer === "app" || layer === "shared"
                            ? []
                            : [
                                  {
                                      group: [`@/${layer}/**`],
                                      message: "Use relative imports within a slice; do not import sibling slices.",
                                  },
                              ]),
                        {
                            group: publicApiPatterns,
                            message: "Import through the slice's public index.ts API.",
                        },
                    ].filter(pattern => pattern.group.length > 0),
                },
            ],
        },
    })),
    prettier,
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
