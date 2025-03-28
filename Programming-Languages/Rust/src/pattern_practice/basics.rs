struct WeekDaysKind {
    day_1: String,
    day_2: String,
    day_3: String,
    day_4: String,
    day_5: String,
    day_6: String,
    day_7: String,
}

pub fn day_of_week(day: i32) {
    let week_days: WeekDaysKind = WeekDaysKind {
        day_1: String::from("Monday"),
        day_2: String::from("Tuesday"),
        day_3: String::from("Wednesday"),
        day_4: String::from("Thursday"),
        day_5: String::from("Friday"),
        day_6: String::from("Saturday"),
        day_7: String::from("Sunday"),
    };

    match day {
        1 => println!("{}", week_days.day_1),
        2 => println!("{}", week_days.day_2),
        3 => println!("{}", week_days.day_3),
        4 => println!("{}", week_days.day_4),
        5 => println!("{}", week_days.day_5),
        6 => println!("{}", week_days.day_6),
        7 => println!("{}", week_days.day_7),
        _ => println!("Invalid day"),
    }
}

struct Grades {
    s: String,
    a: String,
    b: String,
    c: String,
}

pub fn match_grade(percentage: i32) {
    let grades_value: Grades = Grades {
        s: String::from("S - Top"),
        a: String::from("A - Top"),
        b: String::from("B - Top"),
        c: String::from("C - Top"),
    };

    match percentage {
        percentage if ((90..100).contains(&percentage)) => {
            println!("{}", grades_value.s)
        }

        percentage if ((80..90).contains(&percentage)) => {
            println!("{}", grades_value.a)
        }

        percentage if ((70..80).contains(&percentage)) => {
            println!("{}", grades_value.b)
        }

        percentage if ((60..70).contains(&percentage)) => {
            println!("{}", grades_value.c)
        }

        _ => {
            println!("Out standing")
        }
    }
}

pub fn is_even(num: i32) {
    if num % 2 == 0 {
        println!("Even number")
    } else {
        println!("Odd number")
    }
}
