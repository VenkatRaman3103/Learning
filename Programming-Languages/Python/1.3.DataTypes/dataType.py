# question 1
integer = 12.0
# print(integer)
# print(type(integer))

wholeNumber = int(integer)
# print(wholeNumber)
# print(type(wholeNumber))

print("str" * 0)  # print emty string
print(type("str"))  # <class 'str'>
print(type("str" * 12))  # <class 'str'>


# question 3
def get_expected_cost(beds, baths, has_basement):
    baseAmount = 80000

    value = (beds * 30000) + (baths * 10000) + (has_basement * 40000) + baseAmount

    return value


print(get_expected_cost(2, 1, True))

# question 4
print(False + False)  # 0
print(True + False)  # 1
print(False + True)  # 1
print(True + True)  # 2
print(False + True + True + True)  # 3


def cost_of_project(engraving, solid_gold):
    cost = solid_gold * (100 + 10 * len(engraving)) + (not solid_gold) * (
        50 + 7 * len(engraving)
    )
    return cost


print(cost_of_project("venkat", False), "<==")
