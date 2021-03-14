---
id: box
title: Box
---

All props are optional. `Generic Props` like Events and HTML-Attributes are passed automatically.

| **Name**          | **Type**                   | **Default** | **Description**                                                                                                                                                                    |
| :---------------- | :------------------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **alignX**        | `String String[]` | `null`      | Horizontal Align of child elements. Possible values: `left`, `center`, `right`, `space-between`, `space-around`                                                                    |
| **alignY**        | `String String[]` | `null`      | Vertical Align of child elements. Possible values: `top`, `center`, `bottom`, `stretch`                                                                                            |
| **bottom**        | `Number Number[]` | `0`         | Bottom margin of the Box. Unit: Grid-columns.                                                                                                                                      |
| **cols**          | `Number Number[]` | `null`      | Width of the Box. Falls back to width of parent Box or Grid. Unit: Grid-columns defined with the prop "colspan". The value `0` sets `display: none;`.                              |
| **component**     | `ReactElement`               | `null`      | Render a React Component instead of a normal Box. Useful for Framer Motion.                                                                                                     
| **css**           | `String String[]` | `null`      | Custom styles with styled-components.                                                                                                                                              |
| **hasChildBoxes** | `Boolean`                    | `null`      | Tells react-raster if there are child-Boxes inside this component. Only needed in some edge-cases.                                                                                                    |
| **height**        | `String String[]` | `undefined` | Heights of the Box. Unit: Every unit a CSS-height can have.                                                                                                                        |
| **left**          | `Number Number[]` | `0`         | Left margin of the Box. Unit: Grid-columns.                                                                                                                                        |
| **onResize**      | `Function`                   | `null`      | Pass a resize handler. Is also triggered on first render. ⚠️ Caution: Uses ResizeObserver internally, so it just works with newer browsers! See https://caniuse.com/resizeobserver |
| **padding**       | `String String[]` | `null`      | Padding of the Box.                                                                                                                                                                |
| **ref**           | `React Ref-Object`           | `null`      | Pass a ref.                                                                                                                                                                        |
| **right**         | `Number Number[]` | `0`         | Right margin of the Box. Unit: Grid-columns.                                                                                                                                       |
| **top**           | `Number Number[]` | `0`         | Top margin of the Box. Unit: Grid-columns.                                                                                                                                         |
| **tag**           | `String`                     | `'div'`     | HTML-Tag                                                                                                                                                                           |

