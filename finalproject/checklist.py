min_daily = 13 # Minimum number of points to achieve daily
max_daily = 27 # Maximum number of points to achieve daily 

wrap = {} # Dictionary to wrap day and points
gift_points = [] # List to store dictionary

# Function to return message after recording daily points
def gift():
    day = input("Enter the day: ")
    points = int(input("Enter number of points: ")) # Asks user to enter points
    wrap[day] = points # Adds day as the 'key' to the dictionary and 'points' as the value
    gift_points.append(wrap) # Adds the dictionary to the list
    print(f"{points} Points Were Collected Today")

    # if .... else
    if points == max_daily:
        print("I Like To Move It, Move It")
    elif points <= max_daily and points >= min_daily:
        print("Go Go Go Go Go")
    else:
        print("Slow Day, Let's do better tommorow.")
    return gift_points