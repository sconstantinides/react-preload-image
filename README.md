# ⚡ React Preload Image

Preload and fade in an image from a background color or placeholder image.

Optional support for lazy loading so images load when scrolled into view. Uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and falls back to simply preloading when there isn't browser support (cough, IE, cough).

[View the demo on CodePen](https://codepen.io/stothelios/full/gzoZLZ/)

## Usage

Install with `yarn add react-preload-image` or `npm install react-preload-image`

Import in your components with `import PreloadImage from 'react-preload-image'`

### Component styles

These can be applied using a class or inline (examples of each method below).

- **Required:** Relative, absolute, or fixed position
- **Required:** Width & height (explicitly or via top/right/bottom/left)
- **Optional:** Background color or placeholder image (what will be shown before the image loads)

### Component props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| src | String | Yes | | The image source |
| lazy | Boolean | No | | Enables lazy loading |
| duration | String | No | `300ms` | Duration of the fade-in transition |
| ease | String | No | `cubic-bezier(0.215, 0.61, 0.355, 1)` | Ease of the fade-in transition |
| innerStyle | Object | No | | Specify the CSS values for `backgroundSize`, `backgroundPosition`, and `backgroundRepeat` |

## Examples

Styles can be applied using a class:

```css
.someClass {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #222222;
}
```

```jsx
<PreloadImage
  className="someClass"
  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Ailurus_fulgens_-_Syracuse_Zoo.jpg"
  lazy
/>
```

Or inline:

```jsx
<PreloadImage
  style={{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#222222'
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Ailurus_fulgens_-_Syracuse_Zoo.jpg"
/>
```

## Credits

Built using [NWB](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)

## Contributing

To test using the included demo app:

1. Clone the repo
2. Open the directory and run `npm install` and `npm start`
3. The demo app will update to reflect any changes to it or the component

To test in your own local app:

1. Clone the repo
2. Open the directory and run `npm install` and `npm link`
3. Open a directory with a test project and run `npm link [package name]`
4. Back in the react-preload-image directory run `npm run build`
