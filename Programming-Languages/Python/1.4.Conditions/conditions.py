import math


# question 1
def get_grade(score):
    grade = "A"

    if 90 <= score <= 100:
        grade = "A"
    elif 80 <= score <= 89:
        grade = "B"
    elif 70 <= score <= 79:
        grade = "C"
    elif 60 <= score <= 69:
        grade = "D"
    elif score <= 60:
        grade = "F"

    return grade


print(get_grade(59))


# question 2
def cost_of_project(engraving, solid_gold):
    if solid_gold == True:
        cost = (len(engraving) * 10) + 100
    else:
        cost = (len(engraving) * 7) + 50
    return cost


print(cost_of_project("venkat", True))


# question 3
def get_water_bill(num_gallons):
    if num_gallons <= 8000:
        bill = (num_gallons / 1000) * 5
    elif num_gallons <= 22000:
        bill = (num_gallons / 1000) * 6
    elif num_gallons <= 30000:
        bill = (num_gallons / 1000) * 7
    else:
        bill = (num_gallons / 1000) * 10
    return bill


print(get_water_bill(8000))


# question 4
def get_phone_bill(gb):

    if gb <= 15:
        bill = 100
    elif gb >= 15:
        difference = gb - 15
        bill = round((difference * 100) + 100)

    return bill


print(get_phone_bill(15.1), "<==")
