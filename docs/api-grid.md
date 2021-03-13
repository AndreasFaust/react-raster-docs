---
id: grid
title: Grid
---



All props are optional. `Generic Props` like Events and HTML-Attributes are passed automatically.

| **Name**         | **Type**                   | **Default**                       | **Description**                                                                                                 |
| :--------------- | :------------------------- | :-------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **alignX**       | `String` `Strings[]` | `undefined`                       | Horizontal align of child elements. Possible values: `left`, `center`, `right`, `space-between`, `space-around` |
| **alignY**       | `String` `Strings[]` | `undefined`                       | Vertical align of child elements. Possible values: `top`, `center`, `bottom`, `stretch`                         |
| **bottom**       | `String` `Strings[]` | `'0'`                             | Bottom padding of the Grid.                                                                                     |
| **breakpoints**  | `[]`                      | `[0, 432, 768, 1024, 1200, 1400]` | Breakpoints in Pixels, in ascending order starting with zero.                                                   |
| **colspan**      | `Number` `Number[]` | `1`                               | Number of columns.                                                                                              |
| **component**    | `ReactElement`               | `undefined`                       | Render a React Component instead of a normal Grid. Useful for Framer Motion.                                  |
| **control**      | `Boolean`                    | `false`                           | Enable visual control via ESC-Key.                                                                              |
| **controlColor** | `String`                    | `'rgba(0, 0, 0, 0.1)'`            | Custom color for the grid-control.                                                                              |
| **css**          | `String` `Strings[]` | `undefined`                       | Custom styles with styled-components.                                                                           |
| **cssMode**      | `String`                     | `undefined`                       | Use CSS Grid Layout or Flexbox. Override automatic detection of Grid-Layout-support.                            |
| **gutterX**      | `String` `Strings[]` | `'0px'`                           | Horizontal gutter.                                                                                              |
| **gutterY**      | `String` `Strings[]` | `'0px'`                           | Verical gutter.                                                                                                 |
| **innerHTML**    | `String`                     | `undefined`                       | React’s `dangerouslySetInnerHTML` simplified                                                                    |
| **left**         | `String` `Strings[]` | `'0'`                             | Left padding of the Grid.                                                                                       |
| **order**        | `Number` `Number[]` | `undefined`                       | CSS Grid-Layout/Flexbox order-property                                                                          |
| **position**     | `String` `Strings[]` | `'relative'`                      | CSS-position                                                                                                    |
| **ref**          | `React Ref-Object`           | `undefined`                       | Pass a ref.                                                                                                     |
| **right**        | `String` `Strings[]` | `'0'`                             | Right padding of the Grid.                                                                                      |
| **tag**          | `String`                     | `'div'`                           | HTML-Tag                                                                                                        |
| **top**          | `String` `Strings[]` | `'0'`                             | Top padding of the Grid.                                                                                        |
