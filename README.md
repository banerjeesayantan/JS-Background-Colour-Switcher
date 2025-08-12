# JS Background Colour Switcher 🎨





*Try clicking the color buttons to change the background color of the page!*

---

## What is this project?

This simple web app lets **you** change the page’s background color by clicking color buttons. The headings automatically adjust their color for good contrast. When you hover over the navigation bar, the background temporarily changes to a highlight color and reverts to your chosen color when you move your mouse away.

---

## Why would you want this?

Sometimes websites have fixed backgrounds, but what if you want to pick your own? This project shows you how to dynamically change page colors without reloading. It also ensures text stays readable by adjusting heading colors based on your choice.

---

## What technologies did I use?

- **HTML5** to structure content like buttons, headings, and navigation.
- **CSS3**  for styling, layout, colors, and smooth transitions.
- **JavaScript (Vanilla JS)**  for interactivity by:
  - Selecting page elements
  - Handling clicks and mouse events
  - Dynamically changing styles
  - Managing the current background color state
  - Using clean, readable `switch` statements

---

## What will you learn from building this?

- How to manipulate the DOM dynamically and update styles in real time.
- How to handle user interactions like clicks and hovers.
- How to manage app state in JavaScript.
- How to improve accessibility by keeping text readable against changing backgrounds.
- How to organize your code across HTML, CSS, and JS files.
- Basics of deploying static sites online with platforms like Vercel.

---

## How do you use it?

1. Download or clone this project.
2. Open `index.html` in any modern browser.
3. Click the colored squares to change the background.
4. See the headings adjust color automatically.
5. Hover over the navigation bar to see the temporary highlight.
6. Move the mouse away to revert to your chosen background.

---

## Why is this useful for you?

- Use it to add user-controlled theming or accessibility options on websites.
- Great practice if you’re learning JavaScript and front-end development.
- Impress recruiters with clean, interactive, and accessible code.
- Simple enough for beginners to understand and expand.

---

## Quick tip for kids 👶

- Click a colored box to change the page’s color.
- The big text changes color so you can always read it.
- When you hover on the top bar, the page color changes temporarily.
- When you move your mouse away, the page goes back to your chosen color.

---

## Code snippet sneak peek

```js
buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const color = e.currentTarget.id;
    currentColor = color;
    body.style.backgroundColor = color;

    if (color === 'gray' || color === 'blue') {
      hedLine.forEach(h => h.style.color = '#f2f2f2');
    } else {
      hedLine.forEach(h => h.style.color = 'black');
    }
  });
});
```
