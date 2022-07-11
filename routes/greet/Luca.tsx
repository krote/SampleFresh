// routes/greet/[name].tsx

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
    return (
        <main>
            <p>Greeting to you, Luca</p>
        </main>
    );
}
