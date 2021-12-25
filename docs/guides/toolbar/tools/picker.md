---
title: Color picker
sidebar_position: 6
---
import GfyCat from '/src/components/GfyCat';

![Icon](./icons/color_picker.png)

It's a tool that you can use to pick colors, an easier way of doing the same is to drag the color selector, but the picker will show you a more detailed result, and with customizable settings!

The picker automatically switches back to the last tool you used after you use it.

### Settings

+ Sample Mode

  Defines whether the picker will pick colors only from the current layer, from the ones above, the ones below, or all layers! The difference between _mixed_ and _separated_, is that if one layer has a semi-transparent color, the mixed mode will mix it with the colors below it before passing it to the picker, where the separated mode will get the color as is.

+ Pick Alpha

  If this option is set, the picker will set the [opacity] while picking. Otherwise it will ignore the opacity completely
  
<GfyCat id="OldSentimentalHoatzin"/>

[opacity]: ../../color-brush/index.md#opacity