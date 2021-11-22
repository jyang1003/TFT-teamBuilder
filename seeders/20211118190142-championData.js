'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   championName: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('champions', [
      {
        "championName": "Aatrox",
        "championId": "1",
        "cost": 1,
        "traitOne": "Redeemed",
        "traitTwo": "Legionnaire",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Akshan",
        "championId": "2",
        "cost": 5,
        "traitOne": "Sentinel",
        "traitTwo": "Ranger",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Aphelios",
        "championId": "3",
        "cost": 4,
        "traitOne": "Nightbringer",
        "traitTwo": "Ranger",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Ashe",
        "championId": "4",
        "cost": 3,
        "traitOne": "Draconic",
        "traitTwo": "Ranger",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Brand",
        "championId": "5",
        "cost": 2,
        "traitOne": "Abomination",
        "traitTwo": "Spellweaver",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Diana",
        "championId": "6",
        "cost": 4,
        "traitOne": "Nightbringer",
        "traitTwo": "Assassin",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Draven",
        "championId": "7",
        "cost": 4,
        "traitOne": "Forgotten",
        "traitTwo": "Legionnaire",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Fiddlesticks",
        "championId": "8",
        "cost": 4,
        "traitOne": "Abomination",
        "traitTwo": "Revenant",
        "traitThree": "Mystic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Galio",
        "championId": "9",
        "cost": 4,
        "traitOne": "Draconic",
        "traitTwo": "Sentinel",
        "traitThree": "Knight",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Garen",
        "championId": "10",
        "cost": 5,
        "traitOne": "Victorious",
        "traitTwo": "Dawnbringer",
        "traitThree": "Knight",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Gragas",
        "championId": "11",
        "cost": 1,
        "traitOne": "Dawnbringer",
        "traitTwo": "Brawler",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Gwen",
        "championId": "12",
        "cost": 5,
        "traitOne": "Inanimate",
        "traitTwo": "Mystic",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Hecarim",
        "championId": "13",
        "cost": 2,
        "traitOne": "Forgotten",
        "traitTwo": "Cavalier",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Heimerdinger",
        "championId": "14",
        "cost": 5,
        "traitOne": "Draconic",
        "traitTwo": "Renewer",
        "traitThree": "Caretaker",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Ivern",
        "championId": "15",
        "cost": 4,
        "traitOne": "Revenant",
        "traitTwo": "Invoker",
        "traitThree": "Renewer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Irelia",
        "championId": "16",
        "cost": 2,
        "traitOne": "Sentinel",
        "traitTwo": "Skirmisher",
        "traitThree": "Legionnaire",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Jax",
        "championId": "17",
        "cost": 4,
        "traitOne": "Ironclad",
        "traitTwo": "Skirmisher",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Kalista",
        "championId": "18",
        "cost": 1,
        "traitOne": "Abomination",
        "traitTwo": "Legionnaire",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Karma",
        "championId": "19",
        "cost": 4,
        "traitOne": "Dawnbringer",
        "traitTwo": "Invoker",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Kayle",
        "championId": "20",
        "cost": 5,
        "traitOne": "Redeemed",
        "traitTwo": "Legionnaire",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Kennen",
        "championId": "21",
        "cost": 2,
        "traitOne": "Hellion",
        "traitTwo": "Skirmisher",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Kha'Zix",
        "championId": "22",
        "cost": 1,
        "traitOne": "Dawnbringer",
        "traitTwo": "Assassin",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Kled",
        "championId": "23",
        "cost": 1,
        "traitOne": "Hellion",
        "traitTwo": "Cavalier",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Lee Sin",
        "championId": "24",
        "cost": 3,
        "traitOne": "Nightbringer",
        "traitTwo": "Skirmisher",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Leona",
        "championId": "25",
        "cost": 1,
        "traitOne": "Redeemed",
        "traitTwo": "Knight",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Lucian",
        "championId": "26",
        "cost": 4,
        "traitOne": "Sentinel",
        "traitTwo": "Cannoneer",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Lulu",
        "championId": "27",
        "cost": 3,
        "traitOne": "Hellion",
        "traitTwo": "Mystic",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Lux",
        "championId": "28",
        "cost": 3,
        "traitOne": "Redeemed",
        "traitTwo": "Mystic",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Miss Fortune",
        "championId": "29",
        "cost": 3,
        "traitOne": "Forgotten",
        "traitTwo": "Cannoneer",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Nautilus",
        "championId": "30",
        "cost": 2,
        "traitOne": "Ironclad",
        "traitTwo": "Knight",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Nidalee",
        "championId": "31",
        "cost": 3,
        "traitOne": "Dawnbringer",
        "traitTwo": "Skirmisher",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Nocturne",
        "championId": "32",
        "cost": 3,
        "traitOne": "Revenant",
        "traitTwo": "Assassin",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Nunu",
        "championId": "33",
        "cost": 3,
        "traitOne": "Abomination",
        "traitTwo": "Brawler",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Olaf",
        "championId": "34",
        "cost": 1,
        "traitOne": "Sentinel",
        "traitTwo": "Skirmisher",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Poppy",
        "championId": "35",
        "cost": 1,
        "traitOne": "Hellion",
        "traitTwo": "Knight",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Pyke",
        "championId": "36",
        "cost": 2,
        "traitOne": "Sentinel",
        "traitTwo": "Assassin",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Rakan",
        "championId": "37",
        "cost": 3,
        "traitOne": "Sentinel",
        "traitTwo": "Renewer",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Rell",
        "championId": "38",
        "cost": 4,
        "traitOne": "Redeemed",
        "traitTwo": "Ironclad",
        "traitThree": "Cavalier",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Riven",
        "championId": "39",
        "cost": 3,
        "traitOne": "Dawnbringer",
        "traitTwo": "Legionnaire",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Sejuani",
        "championId": "40",
        "cost": 2,
        "traitOne": "Brawler",
        "traitTwo": "Nightbringer",
        "traitThree": "Cavalier",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Senna",
        "championId": "41",
        "cost": 1,
        "traitOne": "Sentinel",
        "traitTwo": "Cannoneer",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Sett",
        "championId": "42",
        "cost": 2,
        "traitOne": "Draconic",
        "traitTwo": "Brawler",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Soraka",
        "championId": "43",
        "cost": 2,
        "traitOne": "Renewer",
        "traitTwo": "Dawnbringer",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Syndra",
        "championId": "44",
        "cost": 2,
        "traitOne": "Redeemed",
        "traitTwo": "Invoker",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Teemo",
        "championId": "45",
        "cost": 5,
        "traitOne": "Cruel",
        "traitTwo": "Hellion",
        "traitThree": "Invoker",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Thresh",
        "championId": "46",
        "cost": 2,
        "traitOne": "Forgotten",
        "traitTwo": "Knight",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Tristana",
        "championId": "47",
        "cost": 2,
        "traitOne": "Hellion",
        "traitTwo": "Cannoneer",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Udyr",
        "championId": "48",
        "cost": 1,
        "traitOne": "Draconic",
        "traitTwo": "Skirmisher",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Varus",
        "championId": "49",
        "cost": 2,
        "traitOne": "Redeemed",
        "traitTwo": "Ranger",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Vayne",
        "championId": "50",
        "cost": 1,
        "traitOne": "Forgotten",
        "traitTwo": "Ranger",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Vel'Koz",
        "championId": "51",
        "cost": 4,
        "traitOne": "Redeemed",
        "traitTwo": "Spellweaver",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Viego",
        "championId": "52",
        "cost": 5,
        "traitOne": "Forgotten",
        "traitTwo": "Skirmisher",
        "traitThree": "Assassin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Vladimir",
        "championId": "53",
        "cost": 1,
        "traitOne": "Nightbringer",
        "traitTwo": "Renewer",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Volibear",
        "championId": "54",
        "cost": 5,
        "traitOne": "Revenant",
        "traitTwo": "Brawler",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Yasuo",
        "championId": "55",
        "cost": 3,
        "traitOne": "Nightbringer",
        "traitTwo": "Legionnaire",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Ziggs",
        "championId": "56",
        "cost": 1,
        "traitOne": "Hellion",
        "traitTwo": "Spellweaver",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "championName": "Zyra",
        "championId": "57",
        "cost": 3,
        "traitOne": "Draconic",
        "traitTwo": "Spellweaver",
        "traitThree": null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('champions', null, {});
  }
};
