import { VideoGame } from "../models/video-game";

const GameItem = (game: Omit<VideoGame, "id">) => {
    return (
        <div className="card-custom">
            <div className="card-size">
                <img className="w-full h-full object-cover object-center" src={game.image} alt={game.title} />
                <div className="card-overlay">
                    <p className="text-4xl font-bold text-white">
                        <div className="p-4 border border-white rounded-full">Play</div>
                    </p>
                </div>
            </div>
            <div className="container-padding">
                <h3 className="card-title">{game.title}</h3>
                <h4 className="card-subtitle">{game.subtitle}</h4>
                <p className="card-description">{game.description}</p>
            </div>
        </div>
    );
};

export default GameItem;
