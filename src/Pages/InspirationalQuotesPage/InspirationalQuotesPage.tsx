import React from "react";
import {Quotecard} from "../../Components/Quotecard/Quotecard";
import "./InspirationalQuotesPage.scss"

export function InspirationalQuotesPage() {
    return (
        <article className="quotes-container">
            <h2>Inspirational Quotes</h2>
            <ul className="quotes">
                <li>
                    <Quotecard
                        quote="“Mankind is drawn to the heavens for the same reason we were once drawn into unknown lands and across the open sea. We choose to explore space because doing so improves our lives, and lifts our national spirit. So let us continue the journey.”"
                        author="George W. Bush"/>
                </li>
                <li>
                    <Quotecard
                        quote="“The exploration of space will go ahead, whether we join in it or not, and it is one of the great adventures of all time, and no nation which expects to be the leader of other nations can expect to stay behind in the race for space.”"
                        author="George W. Bush"/>
                </li>
                <li>
                    <Quotecard
                        quote="“On one side are those who believe space travel is difficult work, but who go for it anyway. On the other are those who believe caring for a goldfish is, and who don’t go after much of anything. Where we choose to seed ourselves on the spectrum of what’s possible is what will ultimately define the size of our lives.”"
                        author="George W. Bush"/>
                </li>
            </ul>
        </article>

    );
}
