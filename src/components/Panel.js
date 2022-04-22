import PlayingSong from "./PlayingSong";
import Controls from "./Controls";

function Panel(props) {
    console.log(props.songs[props.playingIndex].audio);
    return (
        <div className="panel">
            <audio src={props.songs[props.playingIndex].audio} />
            <PlayingSong
                song={props.songs[props.playingIndex]}
            />
            <Controls />
        </div>
    );
}

export default Panel;