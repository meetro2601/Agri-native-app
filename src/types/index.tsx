export type record = {
    recordId:number,
    state: string;
    district: string;
    market: string;
    commodity: string;
    variety: string;
    grade: string;
    arrival_date: string;
    min_price: string;
    max_price: string;
    modal_price: string;
    url?:string,
    imgSrc?:any
  };
  
  export type intialStateType = {
    isLoading:boolean,
    records: record[];
  };
  
  export type commodity = {
    id: number;
    name: string;
    img?:string
  };

  export type categoryType = {
    id: number;
    category: string;
    imgSrc: string;
    list:commodity[]
  };

  export type locationType = {
    district:string
    state:string,
    country:string,
  }