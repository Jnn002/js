import "./App.css";
import { VideoGame } from "./models/video-game";
import VideoGameGrid from "./videogame/VideoGameGrid";
// Whe we work with Tailwind CSS, we can use the following properties order:
// layout => display => spacing => border => colors => text

function App() {
    const games: VideoGame[] = [
        {
            id: 1,
            title: "CiberPunk 2032",
            subtitle: "Future Utopic Game",
            description: "Imagine a future world",
            image: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        },
        {
            id: 2,
            title: "GTA V",
            subtitle: "Rpg game from Los Santos",
            description: "A incredible open-world game",
            image: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        },
        {
            id: 3,
            title: "The Witcher 4",
            subtitle: "RPG with witches",
            description: "Follow Ciri as the new main character and cry about it",
            image: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        },
        {
            id: 4,
            title: "FIFA 2022",
            subtitle: "Football game",
            description: "Play with your favorite team",
            image: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        },
        {
            id: 5,
            title: "Call of Duty",
            subtitle: "War game",
            description: "Another war game",
            image: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        }
    ];

    return <VideoGameGrid games={games} />;
}

export default App;
