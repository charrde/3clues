const gameData = [
    {
        category: "Technology",
        clues: ["Search", "Browser", "Ads"],
        answer: "Google",
        hint: "A leading search engine and tech giant."
    },
    {
        category: "Animals",
        clues: ["Stripes", "Horse-like", "Black and white"],
        answer: "Zebra",
        hint: "This animal is often seen in African savannas."
    },
    {
        category: "Food",
        clues: ["Tropical", "Yellow", "Curved"],
        answer: "Banana",
        hint: "A fruit rich in potassium, often eaten for breakfast."
    },
    {
        category: "Movies",
        clues: ["Wizard", "Scar", "Magic"],
        answer: "Harry Potter",
        hint: "A boy wizard from a famous book series."
    },
    {
        category: "Geography",
        clues: ["Island", "Kangaroos", "Outback"],
        answer: "Australia",
        hint: "A country that's both a continent and home to unique wildlife."
    },
    {
        category: "Sports",
        clues: ["Court", "Ball", "Net"],
        answer: "Basketball",
        hint: "A fast-paced team sport played with a ball and hoop."
    },
    {
        category: "Music",
        clues: ["King", "Rock", "Graceland"],
        answer: "Elvis Presley",
        hint: "He was called the 'King of Rock and Roll.'"
    },
    {
        category: "Literature",
        clues: ["Whale", "Sea", "Ahab"],
        answer: "Moby Dick",
        hint: "A classic novel about a captain's obsession."
    },
    {
        category: "Technology",
        clues: ["Photos", "Social", "Stories"],
        answer: "Instagram",
        hint: "A social media app popular for sharing images."
    },
    {
        category: "Animals",
        clues: ["Jungle", "King", "Mane"],
        answer: "Lion",
        hint: "Known as the 'king of the jungle,' but lives in the savanna."
    },
    {
        category: "Food",
        clues: ["Red", "Sauce", "Cheese"],
        answer: "Pizza",
        hint: "A dish loved by many, typically topped with cheese."
    },
    {
        category: "Movies",
        clues: ["Ship", "Iceberg", "Romance"],
        answer: "Titanic",
        hint: "A famous movie about a tragic ship sinking."
    },
    {
        category: "Geography",
        clues: ["Pyramids", "Desert", "Pharaohs"],
        answer: "Egypt",
        hint: "Home to ancient pyramids and the Nile River."
    },
    {
        category: "Sports",
        clues: ["Field", "Goal", "Team"],
        answer: "Soccer",
        hint: "The most popular sport worldwide, played with a round ball."
    },
    {
        category: "Literature",
        clues: ["Ring", "Journey", "Middle Earth"],
        answer: "Lord of the Rings",
        hint: "A story of a journey to destroy a powerful ring."
    },
    {
        category: "Technology",
        clues: ["Videos", "Subscribers", "Channels"],
        answer: "YouTube",
        hint: "A platform where creators share videos."
    },
    {
        category: "Animals",
        clues: ["Aquatic", "Fins", "Predator"],
        answer: "Shark",
        hint: "An ocean predator with sharp teeth."
    },
    {
        category: "Food",
        clues: ["Mexican", "Tortilla", "Folded"],
        answer: "Taco",
        hint: "A popular Mexican dish often filled with meat and vegetables."
    },
    {
        category: "Movies",
        clues: ["Space", "Force", "Galaxy"],
        answer: "Star Wars",
        hint: "A science fiction saga set in a galaxy far, far away."
    },
    {
        category: "Geography",
        clues: ["Eiffel Tower", "Paris", "Wine"],
        answer: "France",
        hint: "A European country known for art and culture."
    },
    {
        category: "Sports",
        clues: ["Racket", "Net", "Serve"],
        answer: "Tennis",
        hint: "A sport played by two or four players on a rectangular court."
    },
    {
        category: "Music",
        clues: ["Fab Four", "Liverpool", "British"],
        answer: "The Beatles",
        hint: "A legendary band that started the British invasion in music."
    },
    {
        category: "Literature",
        clues: ["Dystopia", "Big Brother", "Surveillance"],
        answer: "1984",
        hint: "A famous novel by George Orwell about totalitarian control."
    },
    {
        category: "Technology",
        clues: ["Smartphone", "Apps", "iOS"],
        answer: "Apple",
        hint: "A tech company known for its iPhones and MacBooks."
    },
    {
        category: "Animals",
        clues: ["Mammal", "Ocean", "Whale"],
        answer: "Dolphin",
        hint: "A friendly, intelligent ocean mammal."
    },
    {
        category: "Food",
        clues: ["Italian", "Pasta", "Cheese"],
        answer: "Lasagna",
        hint: "A layered pasta dish baked with cheese."
    },
    {
        category: "Movies",
        clues: ["Superhero", "Avengers", "Hammer"],
        answer: "Thor",
        hint: "A Norse god who wields a magical hammer."
    },
    {
        category: "Geography",
        clues: ["Mountain", "Cold", "Everest"],
        answer: "Himalayas",
        hint: "A mountain range home to the world's tallest peak."
    },
    {
        category: "Sports",
        clues: ["Grass", "Wimbledon", "Rackets"],
        answer: "Tennis",
        hint: "A sport played on a court with a net in the middle."
    },
    {
        category: "Music",
        clues: ["Country", "Guitar", "Tennessee"],
        answer: "Johnny Cash",
        hint: "A legendary country singer known as 'The Man in Black.'"
    },
    {
        category: "Literature",
        clues: ["Fantasy", "Dragons", "Throne"],
        answer: "Game of Thrones",
        hint: "A popular series of novels set in Westeros."
    },
    {
        category: "Technology",
        clues: ["Streaming", "Shows", "Movies"],
        answer: "Netflix",
        hint: "A popular service for streaming TV shows and movies."
    },
    {
        category: "Geography",
        clues: ["Rainforest", "River", "South America"],
        answer: "Amazon",
        hint: "A large river and rainforest known for its biodiversity."
    },
    {
        category: "Technology",
        clues: ["Text", "Messaging", "Blue Bubbles"],
        answer: "iMessage",
        hint: "A messaging service exclusive to Apple devices."
    },
    {
        category: "Animals",
        clues: ["Marsupial", "Australia", "Pouch"],
        answer: "Kangaroo",
        hint: "An animal known for hopping and carrying its young in a pouch."
    },
    {
        category: "Food",
        clues: ["Breakfast", "Fluffy", "Syrup"],
        answer: "Pancakes",
        hint: "A flat, round breakfast dish often served with syrup."
    },
    {
        category: "Movies",
        clues: ["Dinosaurs", "Island", "Park"],
        answer: "Jurassic Park",
        hint: "A movie about a theme park filled with cloned dinosaurs."
    },
    {
        category: "Geography",
        clues: ["Desert", "Pyramids", "Sphinx"],
        answer: "Egypt",
        hint: "A country in North Africa known for its ancient monuments."
    },
    {
        category: "Sports",
        clues: ["Puck", "Ice", "Stick"],
        answer: "Hockey",
        hint: "A fast-paced sport played on ice."
    },
    {
        category: "Music",
        clues: ["Rap", "8 Mile", "Detroit"],
        answer: "Eminem",
        hint: "A rapper known for his fast lyrics and movie '8 Mile.'"
    },
    {
        category: "Literature",
        clues: ["Detective", "Pipe", "London"],
        answer: "Sherlock Holmes",
        hint: "A famous detective created by Sir Arthur Conan Doyle."
    },
    {
        category: "Technology",
        clues: ["Photos", "Filters", "Square"],
        answer: "Instagram",
        hint: "A social media platform for sharing images."
    },
    {
        category: "Animals",
        clues: ["Long Neck", "Africa", "Tall"],
        answer: "Giraffe",
        hint: "The tallest land animal."
    },
    {
        category: "Food",
        clues: ["Dairy", "Frozen", "Dessert"],
        answer: "Ice Cream",
        hint: "A cold, sweet treat made from milk or cream."
    },
    {
        category: "Movies",
        clues: ["Adventure", "Treasure", "Whip"],
        answer: "Indiana Jones",
        hint: "A famous archaeologist and adventurer with a whip."
    },
    {
        category: "Geography",
        clues: ["Big Apple", "Empire State", "Statue of Liberty"],
        answer: "New York",
        hint: "A major city in the United States known for its landmarks."
    },
    {
        category: "Sports",
        clues: ["Field", "Bat", "Home Run"],
        answer: "Baseball",
        hint: "A sport played with a bat and ball, aiming to score runs."
    },
    {
        category: "Music",
        clues: ["Purple", "Paisley Park", "Guitar"],
        answer: "Prince",
        hint: "A musical legend known for 'Purple Rain.'"
    },
    {
        category: "Literature",
        clues: ["Ring", "Gollum", "Hobbits"],
        answer: "The Lord of the Rings",
        hint: "A story about a magical ring and an epic journey."
    },
    {
        category: "Technology",
        clues: ["Video", "Streaming", "Subscription"],
        answer: "Netflix",
        hint: "A service known for streaming movies and shows."
    },
    {
        category: "Animals",
        clues: ["Nocturnal", "Wings", "Vampire"],
        answer: "Bat",
        hint: "A flying mammal often associated with Halloween."
    },
    {
        category: "Movies",
        clues: ["Galaxy", "Force", "Lightsaber"],
        answer: "Star Wars",
        hint: "A science fiction saga involving the Force and lightsabers."
    },
    {
        category: "Geography",
        clues: ["South America", "Soccer", "Carnival"],
        answer: "Brazil",
        hint: "A country known for its Amazon rainforest and soccer team."
    },
    {
        category: "Sports",
        clues: ["Court", "Net", "Volleys"],
        answer: "Tennis",
        hint: "A sport played with rackets and a small ball over a net."
    },
    {
        category: "Music",
        clues: ["Thriller", "Glove", "Moonwalk"],
        answer: "Michael Jackson",
        hint: "The King of Pop known for the moonwalk."
    },
    {
        category: "Literature",
        clues: ["Witches", "Flying Monkeys", "Yellow Brick Road"],
        answer: "The Wizard of Oz",
        hint: "A classic tale featuring a girl from Kansas and a wizard."
    },
    {
        category: "Technology",
        clues: ["Work", "Microsoft", "Documents"],
        answer: "Microsoft Office",
        hint: "A suite of productivity software by Microsoft."
    },
    {
        category: "Animals",
        clues: ["Black and White", "Bamboo", "China"],
        answer: "Panda",
        hint: "A bear-like animal that eats bamboo."
    },
    {
        category: "Food",
        clues: ["Mexican", "Spicy", "Wrapped"],
        answer: "Burrito",
        hint: "A Mexican dish wrapped in a tortilla."
    },
    {
        category: "Movies",
        clues: ["Boxing", "Philadelphia", "Underdog"],
        answer: "Rocky",
        hint: "A movie about a boxer who trains hard to be a champion."
    },
    {
        category: "Geography",
        clues: ["Ice", "Volcanoes", "Northern Lights"],
        answer: "Iceland",
        hint: "A country known for its unique volcanic and icy landscape."
    },
    {
        category: "Sports",
        clues: ["Race", "Track", "Fast"],
        answer: "Running",
        hint: "An athletic activity done in races or marathons."
    },
    {
        category: "Music",
        clues: ["Fab Four", "Liverpool", "British"],
        answer: "The Beatles",
        hint: "A legendary British band that took the world by storm."
    },
    {
        category: "Literature",
        clues: ["Magic", "School", "Wand"],
        answer: "Harry Potter",
        hint: "A boy wizard and his adventures at Hogwarts."
    },
    {
        category: "Technology",
        clues: ["Video", "Streaming", "Google"],
        answer: "YouTube",
        hint: "A platform for watching and sharing videos."
    },
    {
        category: "Animals",
        clues: ["Tropical", "Colorful", "Bird"],
        answer: "Parrot",
        hint: "A brightly colored bird known for mimicking sounds."
    },
    {
        category: "Food",
        clues: ["Grill", "Cheese", "Bread"],
        answer: "Grilled Cheese",
        hint: "A simple sandwich made with melted cheese between two slices of bread."
    },
    {
        category: "Movies",
        clues: ["Superhero", "Marvel", "Iron Man"],
        answer: "The Avengers",
        hint: "A group of superheroes from the Marvel universe."
    },
    {
        category: "Geography",
        clues: ["Big Ben", "Tea", "Royal Family"],
        answer: "United Kingdom",
        hint: "A country known for its monarchy and capital, London."
    },
    {
        category: "Sports",
        clues: ["Pool", "Stick", "Balls"],
        answer: "Billiards",
        hint: "A game played with a cue stick and balls on a table."
    },
    {
        category: "Music",
        clues: ["Piano", "Rocket Man", "British"],
        answer: "Elton John",
        hint: "A British singer known for his flamboyant style and hit songs."
    },
    {
        category: "Literature",
        clues: ["Shakespeare", "Love", "Tragedy"],
        answer: "Romeo and Juliet",
        hint: "A tragic love story by William Shakespeare."
    },
    {
        category: "Technology",
        clues: ["Shopping", "Online", "Delivery"],
        answer: "Amazon",
        hint: "A large online retailer that sells everything from books to electronics."
    },
    {
        category: "Animals",
        clues: ["Wool", "Farm", "Flock"],
        answer: "Sheep",
        hint: "An animal raised for wool and often found in large flocks."
    },
    {
        category: "Food",
        clues: ["Dough", "Sweet", "Icing"],
        answer: "Donut",
        hint: "A sweet, ring-shaped treat often topped with icing or sprinkles."
    },
    {
        category: "Movies",
        clues: ["Robot", "Future", "Skynet"],
        answer: "Terminator",
        hint: "A movie about a cyborg sent from the future to change history."
    },
    {
        category: "Geography",
        clues: ["Wall", "Forbidden City", "Dragon"],
        answer: "China",
        hint: "A country in East Asia known for its ancient history and rapid modernization."
    },
    {
        category: "Music",
        clues: ["Pop", "Moonwalk", "King"],
        answer: "Michael Jackson",
        hint: "The King of Pop known for iconic dance moves and songs."
    }
];
