# Ryder's Checklist 0.2

Ryder's Checklist 0.2 is a build up on "The Checklist 1.0" which was built to help Ryder Ace stay motivated and develop consisted daily habits through a structured routine.
---

## About

This project was first made in the **ICDD course** as a simple website using HTML, CSS, JavaScript.

Now in the **Python Intermediate course**, I improved it by adding a Python backend that uses:
- **File Operations** - Reading data from CSV files
- **OOP (Object-Oriented Programming)** - Using a `Day` class
- **Virtual Enviroments** - To store libraries
- **Python Libraries** - csv, pathlib, datetime, json

---

## What It Does

**Backend (Python):**
- Reads activities from a CSV file
- Uses a `Day` class to store each task
- Exports completed tasks to a JavaScript file

---

## Files in the Project

```
ryders-checklist/
├── main.py                  # Python code (OOP + file reading)
├── activities.csv           # List of all activities
├── schedule_data.js         # Connects Python to the website
├── ryder's_checklist.html   # Main webpage
├── ryder's_checklist.css    # Styling
└── ryder's_checklist.js     # Website logic
```

---

## How to Run

**Python Backend:**
```bash
python main.py
```
Then follow the prompts to mark tasks complete.

**Website:**
Just open `ryder's_checklist.html` in your browser.

---

## The Day Class - OOP Example

```python
class Day:
    def __init__(self, timeofday, activity, points=1):
        self.timeofday = timeofday
        self.activity = activity
        self.points = points
        self.is_completed = False
```

This class stores info about each activity - what time of day it belongs to, the activity name, how many points it's worth, and if it's done or not.

---

## Reading from CSV - File Operations Example

```python
with path.open(mode="r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        # Create Day objects from CSV data
```

The Python script reads `activities.csv` and creates `Day` objects for each task.

---

## Python Libraries Used

| Library | What It Does |
|---------|--------------|
| `csv` | Reads the activities.csv file |
| `pathlib` | Handles file paths |
| `datetime` | Gets current time to know if it's morning/afternoon/evening |
| `json` | Converts data to JavaScript format |

---

## Author
Ritah Komuhangi
