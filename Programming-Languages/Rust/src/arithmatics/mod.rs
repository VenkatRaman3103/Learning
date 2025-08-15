fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn subraction(a: i32, b: i32) -> i32 {
    a - b
}

fn multiplication(a: i32, b: i32) -> i32 {
    a * b
}

fn divide(a: i32, b: i32) -> i32 {
    b / a
}

fn modulus(a: i32, b: i32) -> i32 {
    b % a
}

pub fn arithmatics() {
    let a = 10;
    let b = 20;

    let sum = add(a, b);
    let sub = subraction(a, b);
    let mul = multiplication(a, b);
    let div = divide(a, b);
    let modulo = modulus(a, b);

    println!("{sum}");
    println!("{sub}");
    println!("{mul}");
    println!("{div}");
    println!("{modulo}")
}
