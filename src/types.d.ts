type CapitaliseString = (s:string) => string;

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
};

type TotalDisplayMethod = [TotalDisplayState, React.Dispatch<React.SetStateAction<TotalDisplayState>>];