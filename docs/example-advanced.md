---
id: example-advanced
title: Advanced Usage
---


The following code gives you a more detailed example of what you can do with react-raster:

```jsx
import React from "react";
import { Grid, Box } from "react-raster";
```

```jsx live
const MyCustomChildBox = ({ children }) => (
  <Box className="Testgrid__ChildBox" cols={6} top={[2, 1]} alignY={"center"}>
    {children}
  </Box>
);

const Example = () => (
  <Grid
    className="Testgrid"
    tag="section"
    breakpoints={[0, 432, 768, 1024, 1200, 1400]}
    colspan={[6, 6, 8, 12]}
    left={["3vw", "3vw", "3vw", "2vw"]}
    right={["3vw", "3vw", "3vw", "2vw"]}
    top={"10vw"}
    bottom={"20vw"}
    gutterX={["1.5vw", "1.5vw", "2vw"]}
    gutterY={"3vw"}
    control={process.env.NODE_ENV !== "production"}
    controlColor="rgba(0, 100, 255, 0.1)"
    // use the "bp-"-classes to limit styles to certain breakpoints…
    css={`
      &&.bp-0,
      &&.bp-432,
      &&.bp-768 {
        background: red;
      }
      &&.bp-1024,
      &&.bp-1200,
      &&.bp-1400 {
        background: blue;
      }
    `}
    // the "bp-"-classes have also an index-based indication
    css={`
      &&.bp-1,
      &&.bp-2,
      &&.bp-3 {
        background: red;
      }
      &&.bp-4,
      &&.bp-5,
      &&.bp-6 {
        background: blue;
      }
    `}
    // … or use an array of strings, to address certain breakpoints
    css={[
      `background: red;`,
      `background: red;`,
      `background: red;`,
      `background: blue;`, // from width 1024 on, the background is blue
    ]}
  >
    <Box
      className="Testgrid__Box"
      tag="article"
      cols={[6, 6, 4, 6]}
      top={1}
      left={[0, 0, 3]}
      css={`
        background: pink;

        .bp-1024 &&,
        .bp-1200 &&,
        .bp-1400 && {
          background: red;
        }

        ::after {
          content: "Hallo!";
          position: absolute;
          left: 50%;
          top: 50%;
        }
      `}
    >
      <MyCustomChildBox>
        <h2>Hello</h2>
      </MyCustomChildBox>

      <MyCustomChildBox>
        <h2>World</h2>
      </MyCustomChildBox>

      <Box
        className="Testgrid__Image"
        tag="img"
        cols={6}
        top={1}
        src="https://my-image-source.io"
        alt="A box can be an image, too!"
      />
    </Box>
  </Grid>
);
```