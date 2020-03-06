import React from "react";
import {Quotecard} from "../../Components/Quotecard/Quotecard";
import "./InspirationalQuotesPage.scss"

interface Quote {
    name : string;
    quote: string;
}

const quotes : Quote[] = [
    {
        name: "Konstantin Tsiolkovsky",
        quote: "“The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.”"
    },
    {
        name: "Christa McAuliffe",
        quote: "“Space is for everybody. It’s not just for a few people in science or math, or for a select group of astronauts. That’s our new frontier out there, and it’s everybody’s business to know about space.”"
    },
    {
        name: "Buzz Aldrin",
        quote: "“I believe that space travel will one day become as common as airline travel is today. I’m convinced, however, that the true future of space travel does not lie with government agencies — NASA is still obsessed with the idea that the primary purpose of the space program is science — but real progress will come from private companies competing to provide the ultimate adventure ride, and NASA will receive the trickle-down benefits.”"
    },
    {
        name: "John F. Kennedy",
        quote: "“Those who came before us made certain that this country rode the first waves of the industrial revolutions, the first waves of modern invention, and the first wave of nuclear power, and this generation does not intend to founder in the backwash of the coming age of space. We mean to be a part of it–we mean to lead it. For the eyes of the world now look into space, to the moon and to the planets beyond, and we have vowed that we shall not see it governed by a hostile flag of conquest, but by a banner of freedom and peace. We have vowed that we shall not see space filled with weapons of mass destruction, but with instruments of knowledge and understanding.”"
    },
    {
        name: "John F. Kennedy",
        quote: "“We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.”"
    },
    {
        name: "Mary-Jo Dionne",
        quote: "“On one side are those who believe space travel is difficult work, but who go for it anyway. On the other are those who believe caring for a goldfish is, and who don’t go after much of anything. Where we choose to seed ourselves on the spectrum of what’s possible is what will ultimately define the size of our lives.”"
    },
    {
        name: "Louis Friedman",
        quote: "“Human exploration and colonization of Mars will keep us busy for hundreds, even thousands, of years. During that time, there will be advances in nanotechnology, space sailing, robotics, biomolecular engineering, and artificial intelligence. These advances are occurring even now, affecting our outlook about what it means to be human and engage in human activity. Those technologies will not merely allow us to stay home on Earth and Mars, but our minds will extend our presence throughout the universe so that we will not need or want to extend our bodies there — even if we could, which I think is doubtful.”"
    },
    {
        name: "Mae Jemison",
        quote: "“Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.”"
    },
    {
        name: "Buzz Aldrin",
        quote: "“I know the sky is not the limit because there are footprints on the Moon — and I made some of them!”"
    },
    {
        name: "Chris Hadfield",
        quote: "“To some this may look like a sunset. But it’s a new dawn.”"
    },
    {
        name: "Edgar Mitchell",
        quote: "“You develop an instant global consciousness, a people orientation, an intense dissatisfaction with the state of the world, and a compulsion to do something about it. From out there on the moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, ‘Look at that, you son of a bitch.”"
    },
    {
        name: "Neil Armstrong",
        quote: "“It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn’t feel like a giant. I felt very, very small.”"
    },
    {
        name: "Yuri Gagarin, speaking in 1961 about being the first human in space",
        quote: "“I looked and looked but I didn’t see God.”"
    },
    {
        name: "Michael Collins",
        quote: "“I am also planning to leave a lot of things undone. Part of life’s mystery depends on future possibilities, and mystery is an elusive quality which evaporates when sampled frequently, to be followed by boredom. For example, catching various types of fish is on my list of good things to do, but I would be reluctant to rush into it, even if i had the time. I want no part of destroying fishing as a mysterious sport.”"
    },
    {
        name: "Viktor Alexandrov",
        quote: "“Gravity hurts.”"
    },
    {
        name: "Chris Hadfield",
        quote: "“In the van, we can see the rocket in the distance, lit up and shining, an obelisk. In reality, of course, it’s a 4.5-megaton bomb loaded with explosive fuel, which is why everyone else is driving away from it.”"
    },
    {
        name: "Alan Bean",
        quote: "“I find it curious that I never heard any astronaut say that he wanted to go to the Moon so he would be able to look back and see the Earth. We all wanted to see what the Moon looked like close up. Yet, for most of us, the most memorable sight was not of the Moon but of our beautiful blue and white home, moving majestically around the sun, all alone and infinite black space.”"
    },
    {
        name: "Ron Garan",
        quote: "“We are limited only by our imagination and our will to act.”"
    },
    {
        name: "Sultan Bin Salman al-Suad",
        quote: "“The first day or so we all pointed to our countries. The third or fourth day we were pointing to our continents. By the fifth day we were only aware of one Earth.” "
    },
    {
        name: "Neil Armstrong",
        quote: "“I thought the attractions of being an astronaut were actually, not so much the moon, but flying in a completely new medium.”"
    },
    {
        name: "Alan Shepherd",
        quote: "“When I first looked back at the Earth, standing on the Moon, I cried.”"
    },
    {
        name: "John Young",
        quote: "“Anyone who sits on top of the largest hydrogen-oxygen fueled system in the world, knowing they’re going to light the bottom, and doesn’t get a little worried, does not fully understand the situation.”"
    },
    {
        name: "Yang Liwei",
        quote: "“The scenery was very beautiful. But I did not see The Great Wall.”"
    },
    {
        name: "Alexi Leonov",
        quote: "“The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.”"
    },
    {
        name: "Buzz Aldrin",
        quote: "“Mars has been flown by, orbited, smacked into, radar examined, and rocketed onto, as well as bounced upon, rolled over, shoveled, drilled into, baked and even blasted. Still to come: Mars being stepped on.”"
    },
    {
        name: "James Irwin",
        quote: "“The Earth reminded us of a Christmas tree ornament hanging in the blackness of space. As we got farther and farther away it diminished in size. Finally, it shrank to the size of a marble, the most beautiful marble you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart.”"
    },
    {
        name: "Edgar Mitchell",
        quote: "“Suddenly, from behind the rim of the moon, in long, slow-motion moments of immense majesty, there emerges a sparkling blue and white jewel, a light, delicate sky-blue sphere laced with slowly swirling veils of white, rising gradually like a small pearl in a thick sea of black mystery. It takes more than a moment to fully realize this is Earth… home.”"
    },
    {
        name: "Ellen Ochoa",
        quote: "“What everyone in the astronaut corps shares in common is not gender or ethnic background, but motivation, perseverance, and desire — the desire to participate in a voyage of discovery.”"
    },
    {
        name: "Michael J. Massimino",
        quote: "“To become an astronaut is not a question of being the best at something or things coming easy to you, but it’s being a person that can work with others and not give up. And, for me, that was part of it too.”\n"
    },
    {
        name: "James Irwin",
        quote: "“It’s easy to sleep floating around — it’s very comfortable. But you have to be careful that you don’t float into somebody or something!”"
    },
    {
        name: "Ron Garan",
        quote: "“Earth is a small town with many neighborhoods in a very big universe.”"
    },
    {
        name: "Sylvia Earle",
        quote: "“Any astronaut can tell you you’ve got to do everything you can to learn about your life support system and then do everything you can to take care of it.”"
    },
    {
        name: "Andy Weir",
        quote: "“Astronauts are inherently insane. And really noble.”"
    },
    {
        name: " John Glenn",
        quote: "“I don’t know what you could say about a day in which you have seen four beautiful sunsets.”"
    },
    {
        name: "Lisa Nowak",
        quote: "“Of course risk is part of spaceflight. We accept some of that to achieve greater goals in exploration and find out more about ourselves and the universe.”"
    }
];


export function InspirationalQuotesPage() {

    

    var numbers : number[] = [];
    while (numbers.length < 3) {
        var num = Math.floor(Math.random() * (quotes.length));
        if (!numbers.includes(num)) {
            numbers.push(num)
        }
    }

    return (
        <article className="quotes-container">
            <h2>Inspirational Quotes</h2>
            <ul className="quotes">
                {numbers
                    .map(number => quotes[number])
                        .map(quote => <li><Quotecard quote={quote.quote} author={quote.name}/></li>)
                }
            </ul>
        </article>

    );
}
