# 🧮 Simple Calculator by @remissg

A beautifully crafted, responsive web calculator built with pure HTML, CSS, and JavaScript. This project blends elegant design with functional precision, offering users a smooth and intuitive experience for performing basic arithmetic operations—whether by clicking or typing.

🔗 **Live Demo**:  
👉 [Explore the Calculator](https://remissg.github.io/Simple-Calculator/)

---

## 📸 Interface Preview

> <img width="2800" height="1470" alt="Screenshot 2025-10-03 133724" src="https://github.com/user-attachments/assets/31ebca62-8efc-4dc5-87a5-09a39f365f82" />




---

## 🧰 Technologies Used

- **HTML5**: Semantic structure and layout
- **CSS3**: Neumorphic design, responsive styling, hover/active effects
- **JavaScript (Vanilla)**: Core logic, dynamic input handling, keyboard support
- **Font Awesome**: Iconography for enhanced UI

---

## 🎯 Features

- ✅ Basic operations: `+`, `-`, `×`, `÷`, `%`
- ✅ Smart bracket insertion: toggles between `(` and `)` based on context
- ✅ Decimal and percentage support
- ✅ Clear (`AC`) and backspace functionality
- ✅ Keyboard input support with visual button feedback
- ✅ Responsive design for desktop and mobile
- ✅ Neumorphic UI with animated hover and press states

---

## 🖥️ How to Use

### Locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/remissg/Simple-Calculator.git
   cd Simple-Calculator
   ```

2. Open `index.html` in any modern browser.

### Online:
Just visit the hosted page:  
👉 [https://remissg.github.io/Simple-Calculator/](https://remissg.github.io/Simple-Calculator/)

---

## ⌨️ Keyboard Shortcuts

| Key         | Action              |
|-------------|---------------------|
| `0–9`       | Input digits        |
| `+ - * /`   | Operators           |
| `Enter`     | Evaluate expression |
| `Escape`    | Clear all (`AC`)    |
| `Backspace` | Delete last digit   |
| `(` or `)`  | Insert brackets     |

> The calculator intelligently maps keys to buttons and simulates visual feedback for a seamless experience.

---

## 🧠 Code Highlights

### `script.js`
- Uses `eval()` with preprocessing to safely handle `%` as `value/100`
- Smart bracket logic based on open/close count
- Simulates button press animation on keydown
- Prevents input focus to avoid accidental typing glitches

### `style.css`
- Neumorphic design with soft shadows and glowing hover effects
- Custom styles for operators, equals button, and active states
- Responsive layout with elegant typography from Google Fonts

### `index.html`
- Clean semantic structure
- Font Awesome integration for delete icon
- Organized button grid for intuitive layout

---

## 📦 Folder Structure

```
Simple-Calculator/
├── index.html       # Main HTML layout
├── style.css        # Styling and animations
├── script.js        # Calculator logic and keyboard support
└── README.md        # Project documentation
```

---

## 🚀 Future Enhancements

- 🧪 Add scientific functions (sin, cos, log, etc.)
- 🕰️ History panel for previous calculations
- 🎨 Theme toggle (dark/light mode)
- 📱 Enhanced mobile responsiveness
- 🔍 Accessibility improvements (ARIA roles, screen reader support)

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License
 
Feel free to use, modify, and share it with proper attribution.


