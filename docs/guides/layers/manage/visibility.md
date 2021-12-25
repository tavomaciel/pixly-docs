---
title: Visibility
sidebar_position: 5
---
import GfyCat from '/src/components/GfyCat';

You can toggle the visibility of a layer by touching the small checkmark by that layer.

Remember that different frames don't share the visibility of their layers with other frames. E.g., if you change the visibility of the 3rd layer of a frame, the visibility of the 3rd layer of other frames won't change.

It's also good to remember that a hidden layer is also hidden when [exporting] to png, sprite sheet or gifs. It's there for convenience and is the expected behavior.
If you [save] your project as a .anim, your hidden layers (even though they're hidden), will still be saved, and next time you open your project, they'll be there (with their visibility setting as it was when saved)

<GfyCat id="BountifulImaginativeEuropeanfiresalamander"/>

[save]: ../../mainmenu/file/save-export.md
[exporting]: ../../mainmenu/file/save-export.md