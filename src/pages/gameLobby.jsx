import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "./styleLobby.css";

export default function GameLobby(props) {
  const url = process.env.REACT_APP_SERVER;
  const { id, playerid } = useParams();
  const [state, setState] = useState([]);
  let navigate = useNavigate(); 

  async function getPlayers(gameid) {
    await fetch(url + '/game/'+gameid+'/playerlist', {
      crossDomain: true,
      method: 'GET'
    }).then(res => res.json()).then(data => {
      setState(data);
    }).catch(err => {
      // setHasError(true);
      console.error(err);
      return
    });
  }

  async function startGame() {
    navigate('/'+id+'/' + playerid + '/draw');
  }

  useEffect(() => {
    getPlayers(id);
  }, [id]);

  return (
    <div>
      <h1>Lobby</h1>
      <img src="/assets/skrawlpic.png" alt="Homepage" id="FrontImage"></img>
        <div>
          <span className="lobbycodetext">Your Lobby Code:</span> <span id="lobbycode"> {id}</span>
        </div>

        <div id = "player-container">

          {state.map((player,idx) => {
            return (
              <div key={idx} className = "playerlist">
                <img src="/assets/playericon.png" alt="Player Icon" id="playericon" className="icon"></img>
                {player}
              </div>
            )

          })}

        </div>
        <button type="button" id="make-lobby" onClick={startGame}>Start Game</button>
    </div>

  );
}