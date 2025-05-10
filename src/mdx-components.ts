import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import type { MDXComponents } from "nextra/mdx-components";

// Get the default MDX components
const themeComponents = getThemeComponents();


export const useMDXComponents = (components:MDXComponents) => ({
  ...themeComponents,
  ...components,
});