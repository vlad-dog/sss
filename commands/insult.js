
module.exports.run = async (bot, message, args) => {

if (message.mentions.members.filter(member => { member.id != bot.user.id }).array().length > 0)
            message.channel.send(message.mentions.members.filter(member => { member.id != bot.user.id }).first() + ', ' + getInsult());
        else
            message.reply(getInsult());
    }


const importedBuckets = {
    insults: [
        { weight: 100, value: "Get [disease] and [die][you_blank]." },
        { weight: 500, value: "I hope [bad_thing_happens_to_you][you_blank]." },
        { weight: 100, value: "your [relative] (p)[hate] you[you_blank]." },
        { weight: 100, value: "[you_smell] like [animal_excrement]." },
        { weight: 100, value: "[you_are] (s)[noun]." },
        { weight: 100, value: "[you_are] (s)[adj] [noun]." },
        { weight: 100, value: "[you_are] (s)[noun], (s)[adj] [noun]." },
        { weight: 100, value: "[you_are] (s)[noun] and your [relative] is (s)[noun]." },
        { weight: 200, value: "[noun]." },
        { weight: 50, value: "a thousand (p)[sex_anatomy] upon [your_face]." },
        { weight: 100, value: "you are (s)[walking] [anatomy]." },
        { weight: 100, value: "[your_or_your_relatives] [body_part_or_parts_are_ugly]." },
        { weight: 100, value: "you [walk] like (s)[animal][you_blank]." },
        { weight: 50, value: "I [hate] your [animal]-[body_part_or_body_parts]." },
        { weight: 100, value: "my, what [ugly_body_part_or_parts] you have!" },
        { weight: 50, value: "on [certain_day] you [doing_something_embarrassing][maybe_while_your_relative_watches]." },
        { weight: 50, value: "between you and r{(s)[adj] [noun]}, I'd rather be r{(s)[adj] [noun]}." },
        { weight: 100, value: "your [hygiene] is [atrocious][you_blank]." },
        { weight: 100, value: "your [body_parts] are [ugly], your [body_part] is [ugly], and you smell like (s)[smelly_noun]." },
        { weight: 50, value: "you're like (s)[noun], but [dumber]." },
    ],
    your_or_your_relatives: [
        { weight: 200, value: "your" },
        { weight: 100, value: "your [relative]'s" }
    ],
    body_part_or_parts_are_ugly: [
        "[body_part] is [ugly]",
        "[body_parts] are [ugly]"
    ],
    bad_thing_happens_to_you: [
        "it smells like (s)[smelly_noun] on your [nice_day]",
        "[you_get] [disease]",
        "[you_get] [hiccups]",
        "your child grows up (s)[adj] [noun]",
        "[you_get] [raped] by a [pack] of (p)[animal]",
        "you fall [off_a_cliff] and die",
        "[you_get] [crucified]",
        "[you_get] [hanged]",
        "your car gets towed",
        "you walk in on your [relative] masturbating",
        "your [relative] catches you masturbating",
        "you have an unplanned child",
        "someone steals your car",
        "you get a nose bleed",
        "no one remembers your birthday",
        "you miss a mortgage payment and lose your home",
        "[you_get] [slapped]",
        "you spontaneously combust",
        "your [relative] has an affair with your [relative]",
        "[you_get] stabbed with (s)[dirty] [knife]",
        "your [relative] marries a [racist]",
        "you lose your job",
        "you marry the wrong person",
        "you fall into a ditch",
        "you miss the bus",
        "you get gum stuck in your hair",
        "you drop your phone",
        "you shit your pants",
        "you miss an important phone call",
        "you get a parking ticket",
        "you get [hiccups]",
        "(s)[fly] [flies_in_your_eye]",
        "you stub your toe",
        "you lose your keys",
        "your leg falls asleep",
        "you get locked out of your house",
        "you get your identity stolen",
        "you get passed on a promotion",
        "you fall down in public",
        "you step in [animal] [feces]",
        "you never find true love",
        "you get caught watching [animal] porn",
        "you get arrested for fraud"
    ],
    animal_excrement: [
        "[animal] [excrement]",
        "fresh [animal] [excrement]",
        "a piece of [animal] [feces]",
        "a fresh piece of [animal] [feces]"
    ],
    racist: ["racist", "nazi"],
    knife: ["knife", "knife", "pitchfork", "fork", "syringe", "stick"],
    dirty: ["dirty", "rusty", "AIDS-infected"],
    crucified: ["crucified", "crucified upside-down"],
    hanged: ["hanged", "hanged for (v)[fuck] (p)[animal]"],
    slapped: ["slapped", "bitch-slapped", "slapped silly", "spat on"],
    off_a_cliff: ["off a cliff", "down a well", "off a mountain"],
    you_blank: ["", ", you [noun]", ", you [adj] [noun]"],
    you_get: ["your [relative] gets", "you get"],
    you_smell: ["you smell", "your [relative] smells", "your breath smells"],
    you_are: ["you are", "your [relative] is"],
    you_have: ["you have", "your [relative] has"],
    your: ["your", "your [relative]'s"],
    your_face: ["you", "your face", "your family", "you and your family"],
    relative: [
        "brother",
        "child",
        "sister",
        "dad",
        "mom",
        "grandpa",
        "grandma",
        "dog",
        "cat",
        "boyfriend",
        "girlfriend"
    ],
    disease: ["AIDS", "cholera", "ebola", "smallpox", "leprosy"],
    hiccups: [
        "hiccups",
        "jock-itch",
        "sunburn",
        "athlete's foot",
        "bad breath",
        "frizzy hair",
        "a paper cut",
        "pink eye",
        "the runs",
        "food poisoning"
    ],
    adj: [
        "[compound_adj]",
        "[single_word_adj]",
        "[single_word_adj], [compound_adj]"
    ],
    compound_adj: [
        "[penis]-sucking",
        "[fluid]-(v)[guzzle]",
        "[feces]-(v)[eat]",
        "[excrement]-stained",
        "[animal]-(v)[fuck]",
        "[disease]-ridden",
        "[animal]-infested"
    ],
    single_word_adj: [
        "bloody",
        "brain-dead",
        "degenerate",
        "depraved",
        "despicable",
        "disgusting",
        "drooling",
        "fat",
        "festering",
        "filthy",
        "half-witted",
        "insignificant",
        "insecure",
        "meat-headed",
        "miserable",
        "pathetic",
        "puerile",
        "rancid",
        "repulsive",
        "ridiculous",
        "slack-jawed",
        "ugly",
        "vulgar",
        "worthless"
    ],
    noun: [
        "[anatomy]",
        "[fluid_container]",
        "[smelly_noun]-[food]",
        "[sex_anatomy]-face",
        "[smelly_noun]-breath",
        "piece of [feces]",
        "piece of [animal] [feces]",
        "son of (s)[animal]",
        "[buffoon]",
        "[fluid]-(n)[guzzle]",
        "[feces]-(n)[eat]",
        "[animal]-(n)[fuck]",
        "[fruit]-[sex_anatomy]",
        "[excrement]-stain",
        "[sex_anatomy]-monster",
        "miscreant",
        "troglodyte",
        "paper cut",
        "canker sore",
        "dildo",
        "slut",
        "[racist]"
    ],
    fluid_container: ["[fluid]-[container]", "[container] of [fluid]"],
    container: ["bag", "sack", "bucket", "bowl"],
    buffoon: ["buffoon", "moron", "nincompoop", "idiot", "loser", "dummy"],
    anatomy: [
        "[penis]",
        "[pubic_hair]",
        "[anus]",
        "canker",
        "pustule",
        "wart",
        "ovary",
        "tit",
        "testicle"
    ],
    smelly_noun: ["[penis]", "[anus]", "[feces]", "fart", "armpit"],
    sex_anatomy: ["[penis]", "[anus]"],
    anus: ["anus", "ass", "rectum", "butt"],
    penis: ["cock", "dick", "penis", "dong"],
    animal: [
        "alligator",
        "ape",
        "baboon",
        "camel",
        "chicken",
        "chimpanzee",
        "chihuahua",
        "cow",
        "crocodile",
        "dog",
        "donkey",
        "elephant",
        "fish",
        "goat",
        "hippo",
        "horse",
        "hyena",
        "llama",
        "monkey",
        "pig",
        "rat",
        "skunk",
        "warthog"
    ],
    fuck: ["fist", "fuck", "hump", "molest", "slap", "violate"],
    excrement: ["[feces]", "[semen]", "[urine]", "[vomit]", "douche"],
    fluid: ["[semen]", "[urine]", "[vomit]", "douche", "diarrhea"],
    feces: ["poop", "shit", "turd"],
    feces_verb: ["poop", "shit"],
    eat: ["eat", "lick", "sniff"],
    semen: ["cum", "jizz"],
    guzzle: ["chug", "drink", "guzzle"],
    urine: ["piss", "urine"],
    vomit: ["puke", "vomit"],
    pubic_hair: ["pube", "pubic hair"],
    raped: ["eaten", "humped", "violated", "captured", "imprisoned", "enslaved"],
    pack: ["group", "family", "pack", "swarm"],
    fruit: ["banana", "lemon", "mango", "kiwi", "cheese"],
    food: ["burger", "sandwich", "cake", "biscuit"],
    small_object: ["[fruit]", "[small_animal]"],
    small_animal: ["rat", "gerbil", "hamster", "kitten", "insect", "maggot"],
    nice_day: ["wedding day", "anniversary", "birthday"],
    walking: ["walking", "talking"],
    die: [
        "die",
        "fall down a set of stairs",
        "run into a wall",
        "walk into oncoming traffic"
    ],
    fly: ["mosquito", "gnat", "bee"],
    flies_in_your_eye: [
        "lands on your eye",
        "lands in your ear",
        "flies up your butt",
        "flies in your mouth"
    ],
    ugly: [
        "atrocious",
        "sub-par",
        "vomit-inducing",
        "disgusting",
        "deformed",
        "malformed",
        "ugly",
        "gross",
        "nauseating",
        "weird"
    ],
    body_part: ["face", "nose", "head", "beard", "skin", "hair", "forehead"],
    countable_body_part: ["face", "nose", "head", "beard", "forehead"],
    body_parts: ["ears", "eyes", "arms", "legs", "teeth", "lips"],
    body_part_or_body_parts: ["[body_part]", "[body_parts]"],
    ugly_body_part_or_parts: [
        "[ugly] [body_parts]",
        "(s)[ugly] [countable_body_part]"
    ],
    walk: ["walk", "smell", "look", "sound", "laugh"],
    hate: ["hate", "loathe", "despise", "detest"],
    doing_something_embarrassing: [
        "[feces_verb] on (p)[animal]",
        "expose yourself to children",
        "sniff (s)[smelly_noun]",
        "bathe in [fluid]",
        "drink [animal] [urine]",
        "eat [animal] [feces]",
        "masturbate to [animal] porn"
    ],
    maybe_while_your_relative_watches: ["", " while your [relative] [watches]"],
    watches: ["watches", "films it"],
    certain_day: [
        "Mondays",
        "Tuesdays",
        "Wednesdays",
        "Thursdays",
        "Fridays",
        "Saturdays",
        "Sundays",
        "Christmas",
        "New Years",
        "New Years Eve",
        "Halloween",
        "Valentine's Day",
        "Martin Luther King Day",
        "President's Day",
        "Memorial Day",
        "Labour Day"
    ],
    hygiene: ["personal hygiene", "oral hygiene", "hygiene"],
    atrocious: [
        "terrible",
        "horrendous",
        "atrocious",
        "sub-par",
        "not good",
        "disgusting"
    ],
    dumber: [
        "dumber",
        "stupider",
        "more annoying",
        "smellier",
        "fatter",
        "grosser",
        "worse"
    ]
};

const isVowel = letter =>
    ["a", "e", "i", "o", "u"].includes(letter.toLowerCase());

const addIndefiniteArticle = str => {
    if (str.match(/^(use|urin)/)) {
        return "a " + str;
    }

    if (isVowel(str[0])) {
        return "an " + str;
    }

    return "a " + str;
};

const capitalize = str => str[0].toUpperCase() + str.slice(1);

const pluralize = str => {
    if (str.slice(-1) === "s") {
        return str + "es";
    }
    if (str.slice(-2) === "sh") {
        return str + "es";
    }
    return str + "s";
};

const nounify = str => {
    if (str.slice(-3) === "ate") {
        return str.slice(0, str.length - 1) + "or";
    }

    if (isVowel(str.slice(-1))) {
        return str + "r";
    }

    if (isVowel(str[str.length - 2]) && isVowel(str[str.length - 3])) {
        return str + "er";
    }

    if (isVowel(str[str.length - 2])) {
        return str + str.slice(-1) + "er";
    }

    return str + "er";
};

const ingify = str => {
    if (isVowel(str.slice(-1))) {
        return str.slice(0, str.length - 1) + "ing";
    }

    if (isVowel(str[str.length - 2]) && isVowel(str[str.length - 3])) {
        return str + "ing";
    }

    if (isVowel(str[str.length - 2])) {
        return str + str.slice(-1) + "ing";
    }

    return str + "ing";
};


const randomElement = arr => {
    if (arr[0] && arr[0].weight) {
        const totalWeight = arr.reduce((acc, curr) => acc + curr.weight, 0);
        const rand = Math.random() * totalWeight;
        let count = 0, index = 0;

        do {
            count += arr[index].weight;
            index++;
        } while (count < rand);

        return arr[index - 1].value;
    } else {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }
};

const replacePatternWithModifier = buckets => (_, modifier, bucketName) => {
    const phrase = select(bucketName, buckets);

    switch (modifier) {
        case "s":
            return addIndefiniteArticle(phrase);
        case "c":
            return capitalize(phrase);
        case "p":
            return pluralize(phrase);
        case "n":
            return nounify(phrase);
        case "v":
            return ingify(phrase);
        default:
            return phrase;
    }
};

const replaceSimplePattern = buckets => (_, bucketName) =>
    select(bucketName, buckets);

function parse(str, buckets) {
    let output = str;
    const repeatingMatch = str.match(/r{(.*?)}/);

    if (repeatingMatch) {
        const phrase = parse(repeatingMatch[1], buckets);

        output = output.replace(/r{.*?}/g, phrase);
    }

    return output
        .replace(/\((.)\)\[(.*?)]/g, replacePatternWithModifier(buckets))
        .replace(/\[(.*?)]/g, replaceSimplePattern(buckets));
}

function select(bucketName, buckets) {
    const phrase = randomElement(buckets[bucketName]);

    return parse(phrase, buckets);
}

const getInsult = (buckets = importedBuckets) =>
    capitalize(select("insults", buckets));