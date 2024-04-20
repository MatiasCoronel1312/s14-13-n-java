interface DestinationD {
    DestinationInfo :DestinationInfo;
    DestinationUbication: DestinationUbication;
    DestinationBestTime : DestinationBestTime;
    DestinationTipExtra : DestinationTipExtra;

}
export interface DestinationInfo{
    imgDestination: string;
    province: string[];
    nameDestination: string;
    description: string;
}

export interface  DestinationUbication{
    imgDUbication: string;
    distance: string;
    imgDUbication2:string;
    
}

export interface DestinationBestTime{
    description: string;
    itemParties: string[];
    
    imgMejorEpoca: string;
    nameParties: string[];
    descriptionParties: string[];
}

export interface DestinationTipExtra{
    imgTipExtra: string;
    description: string;   
    tipsDestination: string[];
}

export default DestinationD;