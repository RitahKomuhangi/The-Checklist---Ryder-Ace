import csv  # Imports the csv module to read and write csv files
from pathlib import Path # Imports Path from pathlib to handle file paths
from datetime import datetime # Imports datetime so we can get the current date and time
import json # Imports json module to write data for the frontend

# Main 'Day' Class to represent and manage daily activities
class Day:

    def __init__(self, timeofday, activity, points=1):
        self.timeofday = timeofday # Stores time of day
        self.activity = activity # Stores activity name
        self.points = points # Stores points earned for completing activity
        self.is_completed = False # Tracks if activity is done
    
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
    
    # Method to convert Day object to a dictionary for JSON Export
    def conv_to_dict(self):
        return{
            "timeofday": self.timeofday,
            "activity": self.activity,
            "points": self.points,
            "is_completed": self.is_completed
        }

    # Method to display objects to user
    def __repr__(self):
        
        if self.is_completed:
            status = "Done" 
        else:
            status = "Pending"

        return f"{self.activity} : {status}"
   
def main():
    tasks = [] # Empty list to store Day objects
    file_name = "activities.csv" # Stores the CSV file name in a variable 
    path =  Path.cwd() / file_name # Creates a full path to the file using the current working directory
    
    with path.open(mode="r") as file: # Opens the CSV file in read mode
        reader = csv.DictReader(file) # Creates a DictReader object treating each CSV Row as a dictionary
    
        # Loops through each row, creates a Day Object then adds it to the tasks list
        for row in reader:
            tasks.append(Day(timeofday="Morning",activity=row["Morning"].strip(), points=1))
            tasks.append(Day(timeofday="Afternoon", activity=row["Afternoon"].strip(), points=1))
            tasks.append(Day(timeofday="Evening", activity=row["Evening"].strip(), points=1))

    # Determines current time of day before printing tasks
    current_timeofday = Day.get_timeofday()
    print(f"\n-{current_timeofday} Schedule\n-")


    updated_tasks = [] # List for tasks matching current time of day
    filtered_tasks = [] # List to store tasks after user input

    # Prints only tasks for the current time of day
    for task in tasks:
        if task.timeofday == current_timeofday:
            response = input(f"Is '{task.activity}' finished?: ")

            # Updates the object's attribute directly
            if response == 'yes':
                task.is_completed = True
            else:
                task.is_completed = False

            updated_tasks.append(task)

    print('')  
    print('//////////////////////////////////')    
            
    # Shows updated statuses
    for task in updated_tasks:  
        print(task)
    print('///////////////////////////////////')  

    # A dictionary to prepare data for JSON Export
    exp_data = {
        "current_timeofday": current_timeofday,
        "generated_at": datetime.now(),
        "activities":{
            "Morning": [],
            "Afternoon": [],
            "Evening": []
        }
    }

    # Adds all activites to export
    for task in tasks:
        exp_data["activities"][task.timeofday].append(task.conv_to_dict())

    # Writes JSON File for frontend
    json_path = Path(__file__).parent/"schedule_data.js"

    completed_list = []
    for task in tasks:
        if task.is_completed == True:
            completed_list.append(task.activity)
        
    jsstring = json.dumps(completed_list) # Converts the list into JavaScript text string

    # Writes list of compeleted activities to JSON file
    with json_path.open(mode="w") as json_file:
        json_file.write(f"var completedTasks = {jsstring};")


    print('')
    print('=========================================')
    print(f"Exported data to", {json_path})
    print('__________________________________________')

    # Displays summary in Terminal
    for item, task in (filtered_tasks):
        print(f"{task.activity}")


# Boiler plate to run the program
if __name__ == "__main__":
    main()
