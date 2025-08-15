pub fn loops() {
    let mut a = 10;

    loop {
        if a == 0 {
            break;
        }

        println!("{a}");

        a -= 1;
    }
}
