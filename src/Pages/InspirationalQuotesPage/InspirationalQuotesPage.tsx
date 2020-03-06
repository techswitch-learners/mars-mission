import React from "react";
import {Quotecard} from "../../Components/Quotecard/Quotecard";
import "./InspirationalQuotesPage.scss"

interface Quote {
    name: string;
    quote: string;
}

const quotes: Quote[] = [
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
        name: "Ron Garan",
        quote: "“Earth is a small town with many neighborhoods in a very big universe.”"
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
    }
];

export function InspirationalQuotesPage() {
    
    var numbers: number[] = [];
    while (numbers.length < 3) {
        var num = Math.floor(Math.random() * (quotes.length));
        if (!numbers.includes(num)) {
            numbers.push(num)
        }
    }
    const quoteOne: number = numbers[0];
    const quoteTwo: number = numbers[1];
    const quoteThree: number = numbers[2];

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
