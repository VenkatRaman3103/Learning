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
