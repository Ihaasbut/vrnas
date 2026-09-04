export type PricePlanCardEl = {
   title: string;
   price: string;
   period: string;
   description: string;
   features: string[];
   buttonText: string;
   isMain: boolean;
};

export type PricePlansCardsData = {
   pricePlansCards: PricePlanCardEl[];
};

export type PricePlansCardsProps = {
   data: PricePlansCardsData;
};
