---
id: nextjs
title: Next JS
---

To use `react-raster` with `NextJS` you need to take some following steps: 


## Setup Styled-Components

To use it alongside `styled-components` you might need to:

#### Install `babel-plugin-styled-components`

```bash
yarn add -D babel-plugin-styled-components
```

#### Create `babel-config.json` file in your `root`-directory

```json
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```

#### Add `_document.jsx` to your `pages`-directory

```jsx
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```


## Combine `Box` with the `Link`

The best way to combine links in `NextJS` with `react-raster` is to set the `passHref`-prop on your `Link`-Component. This will automatically infuse a `href`- and `onClick`-prop to its wrapped `Box`, which also needs to have set `tag="a"`, to be an `anchor`-tag. So there is no need for an extra anchor-tag, which might complicate your data-structure!

```jsx
import React from "react";
import { Grid, Box } from "react-raster";
import Link from "next/link";

const BoxLink = (props) => (
  <Link href={props.href} passHref>
    <Box tag="a" {...props}>
      {props.children}
    </Box>
  </Link>
);

const ExampleTeaser = () => (
  <BoxLink href="/article" cols={[6, 6, 3]}>
    <img src="/image" alt="Image" />
    <h2>I am a Teaser!</h2>
    <p>Click me, to read an interesting article.</p>
  </BoxLink>
);
```
