# 🚀 Todo Card Project (Stage 0 → Stage 1a)

## 📌 Overview

This project is a responsive and accessible Todo Card component built with **HTML, CSS, and JavaScript**.
It started as a simple static card (Stage 0) and was enhanced into a fully interactive, stateful component in Stage 1a.

---

## 🌐 Live Demo

🔗 https://your-live-url.vercel.app

---

## 📂 GitHub Repository

🔗 https://github.com/yourusername/todo-card

---

## ⚙️ Features

### ✅ Stage 0

* Static Todo Card layout
* Title, description, priority, due date
* Time remaining display
* Tags and action buttons
* Accessible and responsive structure

---

### 🚀 Stage 1a Enhancements

#### ✏️ Edit Mode

* Edit title, description, priority, and due date
* Save and cancel functionality
* Form with proper labels and accessibility

#### 🔄 Status Control

* Dropdown to switch between:

  * Pending
  * In Progress
  * Done
* Fully synced with checkbox and UI state

#### 🎯 Priority Indicator

* Visual priority indicator (color-based)
* Dynamically updates based on priority level

#### 📖 Expand / Collapse

* Long descriptions can be expanded or collapsed
* Accessible with `aria-expanded` and keyboard support

#### ⏱️ Dynamic Time Handling

* Real-time updates (every 60 seconds)
* Displays:

  * Days
  * Hours
  * Minutes
* Stops updating when task is completed

#### 🚨 Overdue Indicator

* Displays "Overdue" when deadline passes
* Visual red highlight for urgency

---

## 🎨 Design Decisions

* Dark theme UI for modern look and readability
* Flexbox layout for responsiveness
* Clean spacing and typography for clarity
* Right-aligned action buttons for better UX
* Badge and indicator system for quick visual feedback

---

## ⚠️ Known Limitations

* No persistent storage (resets on refresh)
* Edit form does not fully trap focus
* Time updates may have slight delay due to interval timing
* Expand/collapse uses fixed height instead of dynamic measurement

---

## ♿ Accessibility

* Semantic HTML elements used (`article`, `time`, `button`, `label`)
* Fully keyboard navigable
* Visible focus states for interactive elements
* `aria-live="polite"` for time updates
* Proper labels for form inputs
* Accessible expand/collapse with ARIA attributes
* Good color contrast for readability

---

## 📱 Responsiveness

* Works across:

  * Mobile (320px)
  * Tablet (768px)
  * Desktop (1024px+)
* Flexible layout prevents overflow
* Tags wrap properly on smaller screens

---

## 🛠️ Tech Stack

* HTML5
* CSS3 (Flexbox)
* Vanilla JavaScript

---

## ▶️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-card.git
   ```
2. Open the folder
3. Run `index.html` in your browser

---

## 🧠 What I Learned

* Managing UI state with JavaScript
* Building accessible components with ARIA
* Synchronizing multiple UI controls
* Designing responsive layouts
* Writing testable components using `data-testid`

---

## 📌 Submission

This project was built as part of the **HNG Frontend Stage 1a Task**.

---

## 🙌 Acknowledgements

Frontend Wizards Program
