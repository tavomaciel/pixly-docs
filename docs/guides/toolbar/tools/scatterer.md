---
title: Scatterer (Spray)
sidebar_position: 4
---
import GfyCat from '/src/components/GfyCat';

![Icon](./icons/scatter.png)

It will scatter pixels under your finger, they may be all of the [selected color], or they may be of a defined range. The amount of pixels, and how often they are scattered can also be fully changed.

You may know it by the name **spray** on other art software.

### Settings

+ Speed

  Also known as **amount**, it's how many pixels will be put by the scatterer each time it paints.

+ Interval

  This decides how often the scatterer will paint during continuous strokes. Think of this as "How much does my finger have to move before the scatterer will paint again". 0 is immediately, 50 is after a big while.

+ Variation values

  These are how much will that parameter variate from the current color. This values count both up and down variation, e.g.: If my [selected color] has a hue of $$130\degree$$, and I set the *Hue Variation* setting to $$20\degree$$, then the scatterer will scatter colors with hue between $$120\degree$$ and $$140\degree$$ _(which is $$130\degree \pm \frac{20}{2}\degree$$)_. The same rule applies to the other parameters.  

  Setting the all variation to $$0$$ will make the scatterer spit only pixels of the color of your [selected color].
  

<GfyCat id="JauntyScalyAmericancicada"/>

[selected color]: ../../color-brush/primary-secondary.md