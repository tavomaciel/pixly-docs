---
title: Merge
sidebar_position: 3
---
import GfyCat from '/src/components/GfyCat';

Layers may be merged by hitting the merge button on the top of the window.
Since all frames always have the same amount of layers, this action propagates through **ALL** frames.

Merging layers will merge the current selected layer with the one right below it. Eg. If you hit merge on the 2nd layer, the 1st and 2nd layer will merged.
For that reason, you can't do the merge action on the bottom layer, since there's no layer below it to be merged.

<GfyCat id="JollyCircularGoose"/>