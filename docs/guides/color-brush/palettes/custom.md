---
sidebar_position: 3
title: Custom palettes
---

Pixly allow you to load palettes of your own on the [palette manager].

The palettes you load must be of one of the following types:

### JASC-PAL (.jasc or .pal)

The file must be in the following format:

```
JASC-PAL
0100
<amount of colors (a number between 0 and 4096)>
r g b
r g b
r g b
. . .
. . .
. . .
```

Unused colors should be set to 0 0 0 or omitted.

Pixly reads JASC-PAL a little bit different from what's defined in the file standard:

- Pixly will read more than 255 colors, if the file is large enough.
- If the file has less than 255 colors, it won't read the extra zeros at the end.

### .act, .aco, .ase

Just get a .act, .aco or .ase that Photoshop or GIMP generated.

:::caution
Check the color limit! Any colors beyond the 4096 limit will be discarded.
:::

### PNG

If you load an image as a palette, pixly will scan the image and load all colors from it. Each color will have only one instance, even if it appears more than once.

:::caution
Check the color limit! Any colors beyond the 4096 limit will be discarded.
:::

[palette manager]: ./manager/index.md