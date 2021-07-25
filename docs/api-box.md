---
id: box
title: Box
---

All props are optional. **Generic Props** like Events and HTML-Attributes are passed automatically.

## Props to define a Grid

| **Name**         | **Type**            | **Default**                       | **Description**                                               |
| :--------------- | :------------------ | :-------------------------------- | :------------------------------------------------------------ |
| **breakpoints**  | `[]`                | `[0, 432, 768, 1024, 1200, 1400]` | Breakpoints in Pixels, in ascending order starting with zero. |
| **colspan**      | `Number` `Number[]` | `1`                               | Number of columns.                                            |
| **control**      | `Boolean`           | `false`                           | Enable visual control via ESC-Key.                            |
| **controlColor** | `String`            | `'rgba(0, 0, 0, 0.1)'`            | Custom color for the grid-control.                            |

## Props for layouting and special features

| **Name**        | **Type**                | **Default** | **Description**                                                                                                                                                                                         |
| :-------------- | :---------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                 |
| **cols**        | `Number Number[]`       | `null`      | Width of the Box. Falls back to width of parent Box or Grid. Unit: Grid-columns defined with the prop "colspan". The value `0` sets `display: none;`.                                                   |
| **component**   | `ReactElement`          | `null`      | Render a React Component instead of a normal Box. Useful for Framer Motion.                                                                                                                             |
| **styles**      | `String String[]`       | `null`      | Custom styles with styled-components.                                                                                                                                                                   |
| **onResize**    | `Function`              | `null`      | Pass a resize handler. Is also triggered on first render. ⚠️ Caution: Uses `Resize Observer` internally, so it just works with newer browsers! See https://caniuse.com/resizeobserver                   |
| **onIntersect** | `Function`              | `null`      | Pass a intersection handler. Is also triggered on first render. ⚠️ Caution: Uses `Intersection Observer` internally, so it just works with newer browsers! See https://caniuse.com/intersectionobserver |
| **root**        | `HTML-Element Document` | `null`      | `Intersection Observer`’s root                                                                                                                                                                          |
| **rootMargin**  | `string`                | `0px`       | `Intersection Observer`’s rootMargin                                                                                                                                                                    |
| **threshold**   | `number number[]`       | `0`         | `Intersection Observer`’s threshold                                                                                                                                                                     |
| **ref**         | `React Ref-Object`      | `null`      | Pass a ref.                                                                                                                                                                                             |
| **as**          | `String`                | `'div'`     | HTML-Tag                                                                                                                                                                                                |

## Props for Styling

- **react-raster** supports many CSS-properties (written in camelcase).
- Here is the complete list and type-definition:
  https://github.com/AndreasFaust/react-raster/blob/master/src/Box/props.ts
