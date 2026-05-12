import csv  # Imports the csv module to read and write csv files
from pathlib import Path # Imports Path from pathlib to handle file paths
from datetime import datetime # Imports datetime so we can get the current date and time

# Main 'Day' Class 
class Day:

    def __init__(self, timeofday, activity):
        self.timeofday = timeofday
        self.activity = activity
        self.is_completed = False
    
    # Static method to determine current part of the day
    @staticmethod
    def get_timeofday():
        hour = datetime.now().hour # Gets the current hour from the system clock

        if 5 <= hour < 12: 
            return "Morning"
        elif 12 <= hour < 18:
            return "Afternoon"
        else:
            return "Evening"

    # __repr__ method to dusplay each object
    def __repr__(self):
        return f"{self.timeofday}:{self.activity}-{self.is_completed}"

tasks = [] # Empty list to store Day objects
file_name = "activities.csv" # Stores the CSV file name in a variable 
path =  Path.cwd() / file_name # Creates a full path to the file using the current working directory

with path.open(mode="r") as file: # Opens the CSV file in read mode
    reader = csv.DictReader(file) # Creates a DictReader object treating each CSV Row as a dictionary
    
    # Loops through each row, creates a Day Object then adds it to the tasks list
    for row in reader:
        tasks.append(Day("Morning", row["Morning"]))
        tasks.append(Day("Afternoon", row["Afternoon"]))
        tasks.append(Day("Evening", row["Evening"]))

print(tasks)