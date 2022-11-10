import styles from './styles/PlayerPage.module.css';
import PlayerCard from './components/PlayerCard';
import { useQuery, gql } from '@apollo/client';
interface PlayersProps {}

interface PlayerInfo {
  name: string;
  clan: string;
  country: string;
  playerData: {
    playerId: string;
    clanId: string;
  };

  playerStats: {
    ovr: number;
    acc: number;
    imp: number;
    ast: number;
    ent: number;
    utl: number;
    exp: number;
  };
}

interface PlayerArray {
  players: PlayerInfo[];
}
const GET_PLAYER_QUERY = gql`
  query GetPlayers {
    players {
      name
      clan
      country
      playerData {
        playerId
        clanId
      }
      playerStats {
        ovr
        acc
        imp
        ast
        ent
        utl
        exp
      }
    }
  }
`;
const PlayerPage: React.FunctionComponent<PlayersProps> = () => {
  const { loading, data } = useQuery<PlayerArray>(GET_PLAYER_QUERY);
  console.log(data);
  return (
    <>
      <div>List of pro players</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.playersContainer}>
          {data?.players?.map((player: PlayerInfo, idx: number) => {
            return <PlayerCard key={idx} player={player} />;
          })}
        </div>
      )}
    </>
  );
};
export default PlayerPage;
