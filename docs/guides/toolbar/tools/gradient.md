---
title: Gradient fill
sidebar_position: 11
---
import GfyCat from '/src/components/GfyCat';

![Icon](./icons/gradient.png)

If you used this tool on GIMP or Photoshop, it does exactly the same, but the amount of colors can be limited, and you can decide how much dithering it will include.

The gradient will be applied with the [primary and secondary colors].

By default, it is limited to 4 colors, and the dithering is set to 60% on the transitions. You can change that on the [settings](#settings)

:::info
The gradient will be applied on the entire artboard, unless you have something [selected], which will then, be limited to that selection.
:::

### Settings

+ Color Limit

  How many colors will be used in the gradient. You can choose a discrete amount, or leave it unlimited

+ Dithering

  How much dithering should be applied on color transitions. Default is 60%.
  
  :::tip
  10%~20% is a good range of values for a more retro feel.
  :::

+ Dither pattern

  A shortcut to change the [pattern] of the dither.
  

<GfyCat id="MediumDisguisedJaeger"/>
(This sample had 4 colors and dithering set to 12%)

[pattern]: ../../color-brush/brush/patterns.md
[primary and secondary colors]: ../../color-brush/primary-secondary.md
[selected]: ./marquee/index.md