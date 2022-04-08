export interface IRepeater {
    id : number;
    callsign : string;
    city : string;
    modes : string;
    frequency : string;
    toneIn : string;
}

export interface INet {
    id : number;
    dateTime : string;
    repeaterList : [{id: number}];
    name : string;
    description : string;
}
