# Wave 5: Selecting the Sky

There must be a [`<select> element`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) that lets users to determine what sky to display.

## Selection Changes Sky

When a user selects an option from the dropdown element, the appropriate sky should appear on the page.

Like the landscapes, the skies can be anything, as long as they are visual and noticeable to any instructors. They can be images, ASCII art, text, or anything else.

Like the landscapes, changing the sky should _replace_ the existing sky. There should only be one visible sky at a time.

There must be at least four skies.

Our solution uses the following sky options, which you may use if desired:

| Option | Sky                           |
| ------ | ----------------------------- |
| Sunny  | `"☁️ ☁️ ☁️ ☀️ ☁️ ☁️"`         |
| Cloudy | `"☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"` |
| Rainy  | `"🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"`          |
| Snowy  | `"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"`       |

## Hints

- The event for changing a `<select>` element is not called `"click"`! You'll need to find the correct name for this event.
  - "html select change event" is a reasonable Internet search to start.
- This feature requires you to research how do you get the _value_ of the `<select>` element.