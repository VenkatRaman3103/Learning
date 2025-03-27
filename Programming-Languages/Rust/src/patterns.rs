enum WorldLiterature {
    Russia(String),
    India(indian_writer),
    Europe,
}

struct indian_writer {
    jeyamohan: String,
    sundara_ramasamy: String,
    basheer: String,
}

pub fn enums() {
    let my_favorite = WorldLiterature::Russia("Hello world".to_string());

    let indian_author_works: indian_writer = indian_writer {
        jeyamohan: String::from("aram"),
        sundara_ramasamy: String::from("Oru puliyamarathing kathai"),
        basheer: String::from("mathilgal"),
    };

    let favorite_indian_author = WorldLiterature::India(indian_author_works);

    if let WorldLiterature::Russia(s) = my_favorite {
        println!("{}", s);
    }

    if let WorldLiterature::India(indian_writer {
        jeyamohan,
        sundara_ramasamy,
        basheer,
    }) = favorite_indian_author
    {
        println!("{}, {}, {}", jeyamohan, sundara_ramasamy, basheer)
    }
}
