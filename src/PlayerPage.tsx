import styles from './styles/PlayerPage.module.css';
import PlayerCard from './components/PlayerCard';
//import { useQuery, gql } from '@apollo/client';
import { Player, useGetPlayersQuery } from './graphql/generated-types';

const PlayerPage = () => {
  const { loading, data } = useGetPlayersQuery(); //useQuery<PlayerArray>(GET_PLAYER_QUERY);
  console.log(data);
  return (
    <>
      <div>List of pro players</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.playersContainer}>
          {data?.players?.map((player: Player, idx: number) => {
            return <PlayerCard key={idx} player={player} />;
          })}
        </div>
      )}
    </>
  );
};
export default PlayerPage;
