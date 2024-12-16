import { VideoGame } from "../models/video-game";
import GameItem from "./GameItem";
interface Props {
    games: VideoGame[];
}

const VideoGameGrid = ({ games }: Props) => {
    return (
        <div className="page-container">
            <div className="max-w-7xl mx-auto">
                <h1 className="card-title text-4xl">Featured Games</h1>
                <div className="grid-container">
                    {games.map(game => (
                        <GameItem key={game.id} {...game} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoGameGrid;
