import { Play, Pause } from "@/components/Player";
import { usePlayerStore } from "@/store/playerStore";

const CardPlayButton = ({ id }) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const handlePlaying = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;

        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[0] });
      });
  };

  return (
    <button
      onClick={handlePlaying}
      className="card-play-button bg-green-600 p-3.5 rounded-full hover:scale-110 transition-all duration-200"
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
};

export default CardPlayButton;
