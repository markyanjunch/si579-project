import './App.css';
import {useState, useEffect} from "react";

import { getSongs } from "./utils";
import Panel from "./components/Panel.js";
import PlayList from "./components/PlayList";

function App() {
    const songs = getSongs();
    const [playingIndex, setPlayingIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState((playingIndex + 1) % songs.length);
    const [ifPlayList, setIfPlayList] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => { setNextIndex((playingIndex + 1) % songs.length); }, [playingIndex, songs.length]);

    return (
      <main className={ `music-player ${ifPlayList ? "show-playlist" : "hidden-playlist"}` }>
          <PlayList
            songs={songs}
            playingIndex={playingIndex}
            setPlayingIndex={setPlayingIndex}
            ifPlayList={ifPlayList}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
          />
          <Panel
              songs={songs}
              playingIndex={playingIndex}
              setPlayingIndex={setPlayingIndex}
              nextIndex={nextIndex}
              setNextIndex={setNextIndex}
          />
          <PlayList
              setIfPlayList={setIfPlayList}
          />
      </main>
    );
}

export default App;
