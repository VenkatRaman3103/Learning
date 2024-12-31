# question 1
def get_expected_cost(beds, baths):
    baseAmount = 80000
    value = (beds * 30000) + (baths * 10000) + baseAmount
    return value


# question 2
option_one = get_expected_cost(2, 3)
option_two = get_expected_cost(3, 2)
option_three = get_expected_cost(3, 3)
option_four = get_expected_cost(3, 4)

print(option_one)
print(option_two)
print(option_three)
print(option_four)
