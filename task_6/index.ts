interface ITile {
    name: string       // tile title
    price: number      // tile price
    isActive: boolean  // tile status
}

interface IResult {
  totalPriceSum: number,   // summary price of all active tiles
  tileCount: number        // summary active tile's amount
  averagePriceSum: number  // average price amount of all active tiles
}

// array of available tiles
const tileArr: Array<ITile> = [
    {
        name: 'tile_1',
        price: 70,
        isActive: true
    },
    {
        name: 'tile_2',
        price: 50,
        isActive: false
    },
    {
        name: 'tile_3',
        price: 20,
        isActive: true
    },
    {
        name: 'tile_4',
        price: 110,
        isActive: true
    },
    {
        name: 'tile_5',
        price: 85,
        isActive: true
    },
    {
        name: 'tile_6',
        price: 25,
        isActive: false
    },
    {
        name: 'tile_7',
        price: 5,
        isActive: true
    },
];

// write You code here
// const result: IResult = ...
