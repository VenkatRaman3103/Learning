# question 1
menu = [
    "stewed meat with onions",
    "bean soup",
    "risotto with trout and shrimp",
    "fish soup with cream and onion",
    "gyro",
]

menu.remove("bean soup")
menu.append("roasted beet salad")
print(menu)

# question 2
num_customers = [
    137,
    147,
    135,
    128,
    170,
    174,
    165,
    146,
    126,
    159,
    141,
    148,
    132,
    147,
    168,
    153,
    170,
    161,
    148,
    152,
    141,
    151,
    131,
    149,
    164,
    163,
    143,
    143,
    166,
    171,
]

nums = [1, 2, 3, 4, 5, 6]
print(sum(nums[-2:]))

avg_first_seven = sum(num_customers[:7]) / 7
avg_last_seven = sum(num_customers[-7:]) / 7
max_month = max(num_customers)
min_month = min(num_customers)
print(avg_first_seven)

# question 3
alphabet = "A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z"
address = (
    "Mr. H. Potter,The cupboard under the Stairs,4 Privet Drive,Little Whinging,Surrey"
)

letters = alphabet.split(".")
formatted_address = address.split(",")


# question 4
def percentage_liked(ratings):
    list_liked = [i >= 4 for i in ratings]
    percentage_liked = sum(list_liked) / len(ratings)
    return percentage_liked


print(percentage_liked([1, 2, 3, 4, 5, 4, 5, 1]))
