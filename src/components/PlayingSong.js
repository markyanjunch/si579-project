import './PlayingSong.css';

function PlayingSong(props) {
    return (
      <div className="playing-song">
          <img src={ props.song.cover } alt="" />
          <h1>{ props.song.title }</h1>
          <h2>{ props.song.artist }</h2>
      </div>
    );
}

export default PlayingSong;