A fork of [Easy-DnD](https://github.com/rlemaigre/Easy-DnD).

## Changes

- `DropList` emits a `leave` event if the item is dropped back in place. The event's property `index` contains the index of a dropped item. This is to allow cloning the item next to itself if it was dropped with the alt key pressed.

- `InsertEvent`, `ReorderEvent` and `LeaveEvent` emitted by drop list extend the `DnDEvent` and contain all of its properties. For example, the `native` field with a dom event. This allows, for example, to do a clone instead of move if the native event `altKey` property is true.    
