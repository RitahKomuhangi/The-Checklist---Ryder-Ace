# Ryder's Checklist 0.2

Ryder's Checklist 0.2 is a build up on "The Checklist 1.0" which was built to help Ryder Ace stay motivated and develop consisted daily habits through a structured routine.
---

## About

This project was first made in the **ICDD course** as a simple website using HTML, CSS, JavaScript.

Now in the **Python Intermediate course**, I improved it by adding a Python backend that uses:
- **OOP (Object-Oriented Programming)** - Using a `Day` class
- **File Operations** - Reading data from CSV files and writing to JSON files
- **Database Management** - Storing daily time of day points in the `points_db` Database
- **Virtual Enviroments** - To store external libraries like Tinydb
- **Python Libraries** - csv, pathlib, datetime, json
- **External Libraries** - TinyDb 

---

## What It Does

**Backend (Python):**
- Reads activities from a CSV file
- Uses a `Day` class to store each task
- Detects the current time of day (Morning, Afternoon, Evening) 
- Allows Ryder to mark activities as completed 
- Calculates points earned from completed activities 
- Stores points in a TinyDB database 
- Records the date and time results were logged 
- Exports completed tasks to a JavaScript file 

---

## Files in the Project

```
ryders-checklist/
├── main.py                  # Python code (OOP + file reading)
├── activities.csv           # List of all activities
├── schedule_data.js         # Connects Python to the website
└── README.md 
```
## Other Files 
```
├── ryder's_checklist.html   # Main webpage
├── ryder's_checklist.css    # Styling
└── ryder's_checklist.js     # Website logic
```

---

## How to Run

## How to Run 

### 1. Navigate to the Project Directory 
```bash
cd The-Checklist---Ryder-Ace 
```

### 2. Create a Virtual Environment 
```bash
python -m venv checklist 
```

### 3. Activate the Virtual Environment 
**Windows PowerShell** 
```powershell
.\checklist\Scripts\Activate.ps1 
```

If PowerShell blocks execution, run this command: 
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned 
```
Then activate again: 
```powershell
.\checklist\Scripts\Activate.ps1 
```

You should see: 
```text
(checklist) 
```
at the start of your terminal line. 

### 4. Install the requirements
```bash
pip install -r requirements.txt
```
This will install externdal dependencies like TinyDB and any other libraries used by the project. 

### 5. Run the Project 
```bash
cd finalproject
python main.py 
```
Then follow the prompts to mark activities as complete. 

### 6. Open the Website 
Open **ryders_checklist.html** in your browser. 

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
This class stores information about each activity: 
* Time of day 
* Activity name 
* Points earned 
* Completion status 
---

## Reading from CSV - File Operations Example 
```python
with path.open(mode="r") as file: 
   reader = csv.DictReader(file) 

   for row in reader: 
       # Create Day objects from CSV data 
```
The Python script reads `activities.csv` and creates Day objects for each activity. 

---

## Python Libraries Used 

| Library | What It Does |
| :--- | :--- |
| **csv** | Reads activity data from CSV files |
| **pathlib** | Handles file paths |
| **datetime** | Gets the current date and time |
| **json** | Converts data into JavaScript format |
| **tinydb** | Stores points and activity history |

---

## Author 
**Ritah Komuhangi**  
*Python Intermediate Course Project* 
