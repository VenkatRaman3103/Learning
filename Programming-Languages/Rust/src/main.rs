use std::io;

#[allow(dead_code)]
fn array_access() -> usize {
    let mut index = String::new();

    io::stdin().read_line(&mut index).expect("");

    let index: usize = index.trim().parse().expect("");

    index
}

#[allow(dead_code)]
fn basics() {
    // immutability
    let mut x = 0;
    println!("{x}");

    x = 1;
    println!("{x}");

    // constants
    const NAME: &str = "venkat";

    println!("{NAME}");

    // shadowing
    let y = 10;

    {
        let y = y + 10;
        println!("{y}")
    } // shadowing ends

    println!("{y}");

    // DATA TYPES

    // SCALAR

    // INTEGER
    // signed integer
    let a: i8 = -12;
    let big_int: i64 = 10_000;

    println!("{a}");
    println!("{big_int}");

    // un-signed integer
    let b: u8 = 12;
    println!("{b}");

    // FLOATING POINT
    let c: f32 = 24.12;
    println!("{c}");

    // BOOLEAN
    let d: bool = false;
    println!("{d}");

    // CHARACTER
    let e: char = '@';
    println!("{e}");

    // COMPOUND

    // TUPLE
    let tup: (i32, f32, bool) = (12, 24.12, true);
    let (x, y, z) = tup;
    println!("{x} {y} {z}");

    let p = tup.0;
    let q = tup.1;
    let r = tup.2;
    println!("{p}");
    println!("{q}");
    println!("{r}");

    // ARRAY
    let arr: [i32; 3] = [1, 2, 3];
    // let arr: [i32; 3] = [1; 3];
    let l = arr[0];
    let m = arr[1];
    let n = arr[2];
    println!("{l}");
    println!("{m}");
    println!("{n}");

    // let index = array_access();
    // let element = arr[index];
    // println!("{element}");

    let r = {
        let t = 10;
        t + 2
    };

    println!("{r}");
}

#[allow(dead_code)]
fn conditionals() {
    let a = 10;

    if a == 10 {
        println!("a is 10");
    } else {
        println!("a is not 10")
    }

    let b = if a == 10 { 30 } else { 60 };

    println!("b is {b}")
}

#[allow(dead_code)]
fn loops() {
    let mut a = 10;

    loop {
        println!("hello");

        a -= 1;

        if a == 0 {
            break;
        }
    }

    for element in 1..5 + 1 {
        println!("{element}")
    }

    let arr: [i32; 5] = [1, 2, 3, 4, 5];

    for element in arr {
        println!("{element}")
    }

    let mut b = 10;

    while b > 0 {
        b -= 1;
        println!("{b}")
    }
}

fn change_ownership(str: String) -> (usize, String) {
    (str.len(), str)
}

fn calculate_length(value: &str) -> usize {
    value.len()
}

#[allow(dead_code)]
fn barrowing_reference() {
    let mut str = String::from("hello");

    str.push_str(" world");

    println!("{str}");

    let num1 = 12;
    let num2 = num1;

    println!("{num1}");
    println!("{num2}");

    // let s1 = String::from("hello");
    // let s2 = s1;
    //
    // println!("{s1}");
    // println!("{s2}, world")

    let s1 = String::from("value");

    let (l, str) = change_ownership(s1);

    println!("{str} - {l}");

    let s2 = String::from("string");

    let s3 = calculate_length(&s2);

    println!("{s2} - {s3}")
}

#[allow(dead_code)]
fn slice_practice() {
    let s = String::from("hello world");

    let arr: [i32; 3] = [1, 2, 3];

    let first_word = &s[..5];

    let temp = &arr[0..2];

    for i in temp {
        println!("{i}")
    }

    println!("{first_word}")
}

fn main() {
    // basics();
    // conditionals();
    // loops();
    // barrowing_reference();
    // slice_practice()

    struct User {
        name: String,
        active: bool,
        key_1: i32,
        key_2: i32,
        key_3: i32,
    }

    let user_1 = User {
        name: String::from("foo"),
        active: true,
        key_1: 12,
        key_2: 24,
        key_3: 36,
    };

    let user_2 = User {
        name: String::from("bar"),
        active: true,
        ..user_1
    };

    println!("{} ({})", user_1.name, user_1.active);
    println!("{} ({})", user_2.name, user_2.active);

    println!("{}", user_1.key_1);
    println!("{}", user_1.key_2);
    println!("{}", user_1.key_3);

    // tuple struct
    struct Color(i32, i32, i32);

    let color = Color(12, 24, 36);
    println!("{}", color.0);
    println!("{}", color.1);
    println!("{}", color.2);

    #[derive(Debug)]
    struct Rectangle {
        height: i32,
        width: i32,
    }

    impl Rectangle {
        fn area(self: &Rectangle) -> i32 {
            self.width * self.height
        }
    }

    let rect = Rectangle {
        width: 3,
        height: 4,
    };

    let some = Rectangle::area(&rect);
    let temp = rect.area();

    println!("--> {}", some);
    println!("--> {}", temp);

    let rect_1 = Rectangle {
        height: 12,
        width: 24,
    };

    fn area(rect: &Rectangle) -> i32 {
        rect.width * rect.height
    }

    println!("area of rectangle is {}", area(&rect_1));
    println!("area of rectangle is {}", area(&rect_1));

    println!("{rect_1:#?}");

    println!("---");

    struct StringStruct {
        s: String,
    }

    impl StringStruct {
        fn log_string(&self) {
            println!("{}", self.s)
        }

        fn decorate_string(&mut self, decorator: &str) -> &String {
            self.s.push_str(decorator);
            &self.s
        }
    }

    let temp_str = String::from("Hello world");

    let mut str = StringStruct { s: temp_str };

    str.log_string();
    str.decorate_string(" <==");
    str.log_string();

    // enum

    #[derive(Debug)]
    #[allow(dead_code)]
    enum KindOfBeings {
        Plant(String),
        Human(String),
    }

    let plant_1 = KindOfBeings::Plant(String::from("nelumbo"));
    let me = KindOfBeings::Human(String::from("Barely Human"));

    println!("{:?}", plant_1);
    println!("{:?}", me);

    let exist: Option<i32> = Option::Some(12);
    let non_exist: Option<i32> = Option::None;

    println!("{:?}", exist);
    println!("{:?}", non_exist)
}
