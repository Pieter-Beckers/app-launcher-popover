# app-launcher-popover

A bootstrap popover with buttons for apps to launch

## Requirements

- bootstrap
- jquery

## Example

- See example/index.html for the example

## Usage

- Put `data-toggle="app-launcher-popover"` on an element (eg. button or a tag)
- To enable the popover use: `$( "#your-element" ).appLauncherPopover({apps: [...] })`
- `apps` property: `array` of objects with properties:
- - `name`: `string` of the visible link name
- - `background`: `string` css for background
- - `url`: `string` url to navigate to
