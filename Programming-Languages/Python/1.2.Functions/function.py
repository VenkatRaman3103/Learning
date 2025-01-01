import math


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


# question 3
def get_cost(sqft_walls, sqft_ceiling, sqft_per_gallon, cost_per_gallon):
    cost = ((sqft_walls + sqft_ceiling) / sqft_per_gallon) * cost_per_gallon
    return cost


# question 4
print(get_cost(432, 144, 400, 15))


# question 5
def get_actual_cost(sqft_walls, sqft_ceiling, sqft_per_gallon, cost_per_gallon):
    actual_cost = (
        math.ceil((sqft_walls + sqft_ceiling) / sqft_per_gallon) * cost_per_gallon
    )

    return actual_cost


print(get_actual_cost(432, 144, 400, 15))
