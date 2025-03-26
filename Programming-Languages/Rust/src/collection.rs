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

pub fn structs() {
    struct Coordinates {
        x: i32,
        y: i32,
        z: i32,
    }

    let plots: Coordinates = Coordinates {
        x: 12,
        y: 24,
        z: 36,
    };

    println!("{}", plots.x);
    println!("{}", plots.y);
    println!("{}", plots.z);

    let Coordinates { x, y, z } = plots;
    println!("{}, {}, {}", x, y, z);

    struct Object {
        a: i32,
    }

    struct NesteObject {
        a: i32,
        object: Object,
        array: [i32; 3],
    }

    let json: NesteObject = NesteObject {
        a: 12,
        object: Object { a: 24 },
        array: [3, 6, 9],
    };

    println!("{}, {}, {}", json.a, json.object.a, json.array[0])
}
