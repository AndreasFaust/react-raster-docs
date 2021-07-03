---
id: modify-box
title: Modify Box
---

Structure your `Boxes` with special presets, which still can be overwritten.
In Typescript you need to import the types.

```tsx
import React from "react";
import Box, { Props } from "react-raster";

const SpecialBox: React.FC<Props> = (props) => (
  <Box {...props}>{props.children}</Box>
);

SpecialBox.defaultProps = {
  cols: [6, 6, 3],
  css: `background: yellow;`,
};

export default SpecialBox;
```
