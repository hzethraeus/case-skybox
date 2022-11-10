import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Country {
  Ca = 'CA',
  Dk = 'DK',
  Est = 'EST',
  Fr = 'FR',
  Il = 'IL',
  Kz = 'KZ',
  Lv = 'LV',
  Me = 'ME',
  No = 'NO',
  Pl = 'PL',
  Ru = 'RU',
  Ua = 'UA'
}

export type Player = {
  __typename?: 'Player';
  /** The player's clan */
  clan: Scalars['String'];
  /** The player's country */
  country: Country;
  /** The player's name */
  name: Scalars['String'];
  /** The player's schema data, used to reference the API entries */
  playerData: PlayerData;
  /** The player's performance statistics */
  playerStats: PlayerStats;
};

export type PlayerData = {
  __typename?: 'PlayerData';
  /** The unique clan id */
  clanId: Scalars['String'];
  /** The unique player id */
  playerId: Scalars['String'];
};

export type PlayerStats = {
  __typename?: 'PlayerStats';
  acc: Scalars['Int'];
  ast: Scalars['Int'];
  ent: Scalars['Int'];
  exp: Scalars['Int'];
  imp: Scalars['Int'];
  ovr: Scalars['Int'];
  utl: Scalars['Int'];
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  /** Returns the API version number */
  apiVersion: Scalars['String'];
  players: Array<Player>;
};

export type GetPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayersQuery = { __typename?: 'QueryRoot', players: Array<{ __typename?: 'Player', name: string, clan: string, country: Country, playerData: { __typename?: 'PlayerData', playerId: string, clanId: string }, playerStats: { __typename?: 'PlayerStats', ovr: number, acc: number, imp: number, ast: number, ent: number, utl: number, exp: number } }> };


export const GetPlayersDocument = gql`
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

/**
 * __useGetPlayersQuery__
 *
 * To run a query within a React component, call `useGetPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
      }
export function useGetPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
        }
export type GetPlayersQueryHookResult = ReturnType<typeof useGetPlayersQuery>;
export type GetPlayersLazyQueryHookResult = ReturnType<typeof useGetPlayersLazyQuery>;
export type GetPlayersQueryResult = Apollo.QueryResult<GetPlayersQuery, GetPlayersQueryVariables>;