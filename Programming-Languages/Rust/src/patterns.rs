pub fn enums() {
    enum WorldLiterature {
        Russia(String),
        India(IndianWriter),
        Europe,
    }

    struct IndianWriter {
        jeyamohan: String,
        sundara_ramasamy: String,
        basheer: String,
    }

    let my_favorite = WorldLiterature::Russia("Hello world".to_string());

    let indian_author_works: IndianWriter = IndianWriter {
        jeyamohan: String::from("aram"),
        sundara_ramasamy: String::from("Oru puliyamarathing kathai"),
        basheer: String::from("mathilgal"),
    };

    let favorite_indian_author = WorldLiterature::India(indian_author_works);

    if let WorldLiterature::Russia(s) = my_favorite {
        println!("{}", s);
    }

    if let WorldLiterature::India(IndianWriter {
        jeyamohan,
        sundara_ramasamy,
        basheer,
    }) = favorite_indian_author
    {
        println!("{}, {}, {}", jeyamohan, sundara_ramasamy, basheer)
    }
}

pub fn patter_matching() {
    enum Syntax {
        Integer(i32),
        Variables(TokenKind),
    }

    struct TokenKind {
        token_value: String,
        token_type: String,
    }

    let string_token: TokenKind = TokenKind {
        token_value: String::from("var"),
        token_type: String::from("string"),
    };

    let string_token_type: Syntax = Syntax::Variables(string_token);

    let integer_token: Syntax = Syntax::Integer(12);

    match string_token_type {
        Syntax::Variables(TokenKind {
            token_type,
            token_value,
        }) => {
            println!("{} - {}", token_value, token_type)
        }
        Syntax::Integer(i) => {
            println!("{}", i)
        }
    }
}
