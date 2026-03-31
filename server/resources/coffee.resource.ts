 export interface  Coffee {
    coffeeBeans: string;
    iceed: boolean;
    milk?: Milk;
    sugar: number;
    syrups?:Syrup;
    
}
export const milkTypes = ["banana", "coconut", "almond", "coconut and  almond"] as const ; 
export type Milk = (typeof milkTypes) [number];

export const syrupTypes = ["baileys", "vanilla","banana","strawberry","bubble gum"]  as const;
export type Syrup = (typeof syrupTypes) [number];