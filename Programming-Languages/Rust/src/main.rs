// mod collection;
// mod module;
// mod pattern_practice;
// mod patterns;

mod activities;
#[allow(dead_code)]
mod arithmatics;
// mod loops;
// mod while_loop;

fn main() {
    //variables
    // let x = 5;
    // println!("x: {x}");

    // let mut y = 10;
    // println!("y: {y}");
    // y = 20;
    // println!("y: {y}");

    // loops
    // loops::practice::loops_practice();
    // while_loop::practice::while_practice();

    // activities
    // activities::activity_1::activity_1();
    activities::activity_2::calculator();

    // arightmatics
    // arithmatics::arithmatics();

    // collections
    // collection::tuple();
    // collection::arrays();
    // collection::structs();

    // pattern matching
    // patterns::enums();
    // patterns::patter_matching();

    // pattern matching practice
    // pattern_practice::basics::day_of_week(8);
    // pattern_practice::basics::match_grade(90);
    // pattern_practice::basics::is_even(3);
    // pattern_practice::advace::traffic_light();
}
