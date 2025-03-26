pub fn tuple() {
    let tuples: (i32, i32, i32, i32, i32, i32) = (1, 2, 3, 4, 5, 6);

    let first = tuples.0;
    println!(
        "{} accessing first element by destructuring from tuples",
        first
    );

    let (_, second, _, _, _, _) = tuples;
    println!(
        "{} accessing first element by destructuring from tuples",
        second
    );
}

pub fn arrays() {
    let array: [i32; 3] = [3, 6, 9];

    let first_element_array: i32 = array[0];
    println!(
        "{} accessing first element by index from array",
        first_element_array
    );

    let [_, second, _] = array;
    println!(
        "{} accessing first element by destructuring from array",
        second
    );

    // loop
    for element in array {
        println!("{}", element)
    }

    let mut mutable_array = [10, 20, 30, 40, 50];

    mutable_array[0] = 100;

    for element in mutable_array {
        println!("{}", element)
    }
}
