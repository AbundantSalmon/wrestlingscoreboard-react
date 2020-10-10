type CapitaliseString = (s:string) => string;

type MatchState = {
    mat: string,
    age: string,
    gender: string,
    style: string,
    gameType:string,
    weight: number,
    currentTime: string,
    playersSet: boolean,
    started: boolean,
    paused: boolean,
    phase: string
  };

  type MatchPlayer = {
    "playerColor": string,
    "firstName": string,
    "lastName": string,
    "clubName": string,
    "warnings": number,
    "score": number
  }

  type MatchPlayerInformation = {
    "red": MatchPlayer,
    "blue": MatchPlayer
  };

type MatchInformation = {
    mat: string;
    age: string;
    gender: string;
    style: string;
    weight: number;
};

type TotalDisplayState = {
    mainHeader: boolean;
    navigation: boolean;
    playerEntryView: boolean;
    scoreboard: boolean;
};

type TotalDisplayMethod = [TotalDisplayState, React.Dispatch<React.SetStateAction<TotalDisplayState>>];
type MatchPlayerInformationMethod = [MatchPlayerInformation, Dispatch<SetStateAction<MatchPlayerInformation>>];
type MatchStateMethod = [MatchState, Dispatch<SetStateAction<MatchState>>];