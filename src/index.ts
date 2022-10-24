import {PlayingCard} from "tarot-card-deck";
import {PlayingCardIdentifier} from "tarot-card-deck/dist/cards/playing-card";

type PlayerView = {
    id: string,
    name: string
}
export type TableView = {
    id: string
    name: string,
    players: readonly PlayerView[],
    maxNumberOfPlayers: number,
    numberOfPlayers: number
}
export type AllTableViews = TableView[];

export const WATCH_TABLE_ENDPOINT = '/watch-tables'
export const CONNECT_ENDPOINT = '/connect'

export type Announce = 'PRISE' | 'GARDE' | 'GARDE_SANS' | 'GARDE_CONTRE'

export type ApiUserNotification = {
    type: "TABLE_NOT_FOUND",
    tableId: string
} | {
    type: "TABLE_ALREADY_JOINED",
    tableId: string
} | {
    type: "NO_TABLE_JOINED"
} | {
    type: "TABLE_IS_FULL"
} | {
    type: "GAME_NOT_STARTED"
} | {
    type: "TABLE_JOINED",
    tableId: string
} | {
    type: "GOT_IDENTIFIER",
    playerId: string,
    playerName: string
} | {
    type: "GAME_BEGIN",
    players: PlayerView[]
} | {
    type: "PLAYER_HAS_JOINED",
    newPlayer: PlayerView,
    players: PlayerView[]
} | {
    type: "GOT_AVAILABLE_CARDS";
    cards: PlayingCard[];
} | {
    type: "ASKED_TO_PLAY";
    playableCards: readonly PlayingCard[];
} | {
    type: "ERROR_WHILE_PLAYING";
} | {
    type: "PLAYER_HAS_PLAYED";
    player: string;
    card: PlayingCard;
} | {
    type: "TURN_RESULT_IS_KNOWN";
    turnWinner: string;
} | {
    type: "ASKED_FOR_ANNOUNCE";
    availableAnnounces: Announce[];
} | {
    type: "ERROR_WHILE_ANNOUNCING";
} | {
    type: "PLAYER_HAS_ANNOUNCED";
    player: string;
    announce?: Announce;
} | {
    type: "TAKER_IS_KNOWN";
    player: string;
    announce?: Announce;
} | {
    type: "GAME_IS_ABORTED";
} | {
    type: "GAME_IS_OVER";
    numberOfPointsForAttack: number;
    numberOfPointsForDefense: number;
    finalScores: readonly {
        player: string,
        score: number
    }[]
} | {
    type: "ASKED_FOR_SET_ASIDE";
    possibleCardsToSetAside: PlayingCard[];
} | {
    type: "ERROR_WHILE_SETTING_ASIDE";
}

export type ApiPlayerAction = {
    action: "CREATE_TABLE",
    tableName: string
} | {
    action: "JOIN_TABLE"
    tableId: string
} | {
    action: "ANNOUNCE",
    announce: Announce | "NOTHING"
} | {
    action: "SET_ASIDE",
    cards: PlayingCardIdentifier[]
} | {
    action: "PLAY",
    card: PlayingCardIdentifier
}
