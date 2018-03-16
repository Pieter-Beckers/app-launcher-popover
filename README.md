# app-launcher-popover

A bootstrap popover jquery plugin with links for apps to launch

## Requirements

- bootstrap
- jquery

## Example

- See example/index.html for the example

## Usage

- Put `data-toggle="app-launcher-popover"` on an element (eg. button or a tag)
- To enable the popover use: `$( "#your-element" ).appLauncherPopover({apps: [...] })`
- `apps` property: `array` of objects with properties:
  - `name`: `string` of the visible link name
  - `backgroundUrl`: `string` url for the background image
    - for example: `https://www.google.be/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png`
  - `url`: `string` url to navigate to
- `rowLength`: `number`: length of the row: number of apps on one row in the popover, defaults to 5

- To change the style you can use the following css class 
  - `app-launcher-popover`
  - `app-launcher-popover-button`
  - `app-launcher-popover-text`
  - `app-launcher-popover-row`
For example:
```
.app-launcher-popover-text {
	color: white;
	font-size: 18px;
}
```

> !Warning!: be careful for XSS when apps are user-adjustable (popover is HTML enabled)
