---
id: example2
title: Markdown Example
description: My document description
slug: /my-custom-url
---

## Links

Markdown text with [links](./hello.md)

![Docusaurus logo](/img/docusaurus.png)


## Admonitions

:::note

Some **content** with _Markdown_ `syntax`. 

:::

:::tip

Some **content** with _Markdown_ `syntax`. 

:::

:::info

Some **content** with _Markdown_ `syntax`. 

:::

:::warning

Some **content** with _Markdown_ `syntax`. 

:::

:::danger

Some **content** with _Markdown_ `syntax`. 

:::

## MDX and React Components

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !

## Code block

```cpp title="main.cc" {4-5}
#include <iostream>

main() {
  std::cout << "Hello, World!";
  return 0;
}
```
