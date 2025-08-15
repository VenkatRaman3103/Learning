use std::io;

pub fn calculator() {
    let mut num_1 = String::new();
    let mut num_2 = String::new();

    let error_message = "error in getting the value";

    io::stdin().read_line(&mut num_1).expect(error_message);
    io::stdin().read_line(&mut num_2).expect(error_message);

    let a: i32 = num_1.trim().parse().expect("");
    let b: i32 = num_2.trim().parse().expect("");

    let sum = a + b;

    println!("{sum}")
}
