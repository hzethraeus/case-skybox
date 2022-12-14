import styles from '../styles/PlayerCard.module.css';
import lights from '../images/lights.png';
import flares from '../images/flares.svg';
import { Player } from '../graphql/generated-types';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface PlayerProps {
  player: Player;
}
interface ImageData {
  url: string;
  mime_type: string;
}
const PlayerCard = ({ player }: PlayerProps) => {
  const [playerImage, setPlayerImage] = useState<ImageData>({ url: '', mime_type: '' });
  const [countryImage, setCountryImage] = useState<ImageData>({ url: '', mime_type: '' });
  const [clanImage, setClanImage] = useState<ImageData>({ url: '', mime_type: '' });
  useEffect(() => {
    async function getPlayerImage() {
      try {
        const response_player = await axios.get(
          `http://office.skybox.gg:3000/resources/players/${player.playerData.playerId}`
        );
        if (response_player.status === 200) {
          setPlayerImage({
            url: response_player.data.base64_image,
            mime_type: response_player.data.mime_type,
          });
        }
      } catch {
        console.log('error');
      }
    }
    async function getCountryImage() {
      try {
        const response_country = await axios.get(
          `http://office.skybox.gg:3000/resources/flags/${player.country}`
        );
        if (response_country.status === 200) {
          setCountryImage({
            url: response_country.data.base64_image,
            mime_type: response_country.data.mime_type,
          });
        }
      } catch {
        console.log('error');
      }
    }

    async function getClanImage() {
      try {
        const response_clan = await axios.get(
          `http://office.skybox.gg:3000/resources/clans/${player.playerData.clanId}`
        );
        if (response_clan.status === 200) {
          setClanImage({
            url: response_clan.data.base64_image,
            mime_type: response_clan.data.mime_type,
          });
        }
      } catch {
        console.log('error');
      }
    }

    getPlayerImage();
    getCountryImage();
    getClanImage();
  }, [player.playerData.playerId, player.country, player.playerData.clanId]);

  const playerStatsPropNames: string[] = Object.keys(player?.playerStats);
  return (
    <div className={styles.entireCard}>
      <div className={styles.outerCard}>
        <div className={styles.innerCard}>
          <div className={styles.upperCard}>
            {playerImage.url.length > 0 && (
              <img
                className={styles.playerImage}
                src={`data:${playerImage.mime_type};base64,${playerImage.url}`}
                alt="Player"
              />
            )}
            <img className={styles.lightsImg} src={lights} alt="lights" />
            <img className={styles.flaresImg} src={flares} alt="flares" />
          </div>
          <div className={styles.midSpace}></div>
          <div className={styles.midStat}></div>
          <div className={styles.innerMidStat}>
            <div className={styles.statCount}>{player?.playerStats?.ovr}</div>
            <div className={styles.statName}>{playerStatsPropNames[1]}</div>
          </div>

          <div className={styles.lowerCard}>
            <div className={styles.playerInfo}>
              <div className={styles.playerInfoLeft}>
                <div className={styles.playerName}>{player.name}</div>
                <div className={styles.playerClan}>{player.clan}</div>
              </div>
              <div className={styles.playerInfoRight}>
                {clanImage.url.length > 0 && (
                  <img
                    className={styles.clanImage}
                    src={`data:${clanImage.mime_type};base64,${clanImage.url}`}
                    alt="Players clan"
                  />
                )}

                {countryImage.url.length > 0 && (
                  <img
                    className={styles.countryImage}
                    src={`data:${countryImage.mime_type};base64,${countryImage.url}`}
                    alt="Players country"
                  />
                )}
              </div>
            </div>
            <div className={styles.playerStats}>
              <div className={styles.playerStatsLeft}>
                <div className={styles.playerStatCountName}>
                  <div className={styles.statCount}>{player.playerStats.acc}</div>
                  <div className={styles.statName}>{playerStatsPropNames[2]}</div>
                </div>
                <div className={styles.playerStatCountName}>
                  <div className={styles.statCount}>{player.playerStats.imp}</div>
                  <div className={styles.statName}>{playerStatsPropNames[3]}</div>
                </div>
                <div className={styles.playerStatCountName}>
                  <div className={styles.statCount}>{player.playerStats.ast}</div>
                  <div className={styles.statName}>{playerStatsPropNames[4]}</div>
                </div>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.playerStatsRight}>
                <div className={styles.playerStatCountName}>
                  <div className={styles.statCount}>{player.playerStats.ent}</div>
                  <div className={styles.statName}>{playerStatsPropNames[5]}</div>
                </div>
                <div className={styles.playerStatCountName}>
                  <div className={styles.statCount}>{player.playerStats.utl}</div>
                  <div className={styles.statName}>{playerStatsPropNames[6]}</div>
                </div>
                <div className={styles.playerStatCountName}>
                  <div className={styles.statCount}>{player.playerStats.exp}</div>
                  <div className={styles.statName}>{playerStatsPropNames[7]}</div>
                </div>
              </div>
            </div>
            <div className={styles.backgroundLineContainer}>
              {Array(40)
                .fill(0)
                .map((_, idx) => {
                  return <div key={idx} className={styles.backgroundLine}></div>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
