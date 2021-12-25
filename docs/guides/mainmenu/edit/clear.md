---
title: Clear
sidebar_position: 1
---
import GfyCat from '/src/components/GfyCat';

The **Clear** operation will erase pixels of the current layer. If no pixels are [selected][selected area] the full layer will be cleared, otherwise, only the [selected area] will be cleared.

<GfyCat id="GrizzledWhimsicalDikkops"/>

Erase is context dependant:

+ If the current selected layer is not the bottom layer, then erase will make those pixels **transparent**.
+ If the current selected layer is the bottom layer, we have two options
    + If your project has a [transparent background], then the pixels will become transparent.
    + If your project doesn't have a [transparent background], then the pixels will be paint to the [secondary color]

[transparent background]: ../colors-filters/transparency.md
[secondary color]: ../../color-brush/primary-secondary.md
[selected area]: ../../selection/index.md