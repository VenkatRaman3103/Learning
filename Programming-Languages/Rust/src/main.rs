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

fn main() {
    // basics();
    // conditionals();
    // loops();

    let mut str = String::from("hello");

    str.push_str(" world");

    println!("{str}");

    let num1 = 12;
    let num2 = num1;

    println!("{num1}");
    println!("{num2}");

    let s1 = String::from("hello");
    let s2 = s1;

    println!("{s1}");
    println!("{s2}, world")
}
