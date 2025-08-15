use std::{io, usize};

fn array_access() -> usize {
    let mut index = String::new();

    io::stdin().read_line(&mut index).expect("");

    let index: usize = index.trim().parse().expect("");

    return index;
}

fn main() {
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

    let index = array_access();
    let element = arr[index];
    println!("{element}")
}
