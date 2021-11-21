"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "people",
      [
        {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "C-3PO",
          height: "167",
          mass: "75",
          hair_color: "n/a",
          skin_color: "gold",
          eye_color: "yellow",
          birth_year: "112BBY",
          gender: "n/a",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "R2-D2",
          height: "96",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, blue",
          eye_color: "red",
          birth_year: "33BBY",
          gender: "n/a",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darth Vader",
          height: "202",
          mass: "136",
          hair_color: "none",
          skin_color: "white",
          eye_color: "yellow",
          birth_year: "41.9BBY",
          gender: "male",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leia Organa",
          height: "150",
          mass: "49",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "19BBY",
          gender: "female",
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Owen Lars",
          height: "178",
          mass: "120",
          hair_color: "brown, grey",
          skin_color: "light",
          eye_color: "blue",
          birth_year: "52BBY",
          gender: "male",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beru Whitesun lars",
          height: "165",
          mass: "75",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "blue",
          birth_year: "47BBY",
          gender: "female",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "R5-D4",
          height: "97",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, red",
          eye_color: "red",
          birth_year: "unknown",
          gender: "n/a",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Biggs Darklighter",
          height: "183",
          mass: "84",
          hair_color: "black",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "24BBY",
          gender: "male",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Obi-Wan Kenobi",
          height: "182",
          mass: "77",
          hair_color: "auburn, white",
          skin_color: "fair",
          eye_color: "blue-gray",
          birth_year: "57BBY",
          gender: "male",
          planetId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anakin Skywalker",
          height: "188",
          mass: "84",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "41.9BBY",
          gender: "male",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wilhuff Tarkin",
          height: "180",
          mass: "unknown",
          hair_color: "auburn, grey",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "64BBY",
          gender: "male",
          planetId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chewbacca",
          height: "228",
          mass: "112",
          hair_color: "brown",
          skin_color: "unknown",
          eye_color: "blue",
          birth_year: "200BBY",
          gender: "male",
          planetId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Han Solo",
          height: "180",
          mass: "80",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "29BBY",
          gender: "male",
          planetId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Greedo",
          height: "173",
          mass: "74",
          hair_color: "n/a",
          skin_color: "green",
          eye_color: "black",
          birth_year: "44BBY",
          gender: "male",
          planetId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jabba Desilijic Tiure",
          height: "175",
          mass: "1,358",
          hair_color: "n/a",
          skin_color: "green-tan, brown",
          eye_color: "orange",
          birth_year: "600BBY",
          gender: "hermaphrodite",
          planetId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // ID 17 doesn't exisit in database, added myself
        {
          name: "Kamil Beeli de Belfort",
          height: "185",
          mass: "79",
          hair_color: "brown",
          skin_color: "medium",
          eye_color: "brown",
          birth_year: "32BBY",
          gender: "male",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wedge Antilles",
          height: "170",
          mass: "77",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "hazel",
          birth_year: "21BBY",
          gender: "male",
          planetId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jek Tono Porkins",
          height: "180",
          mass: "110",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "unknown",
          gender: "male",
          planetId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yoda",
          height: "66",
          mass: "17",
          hair_color: "white",
          skin_color: "green",
          eye_color: "brown",
          birth_year: "896BBY",
          gender: "male",
          planetId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Palpatine",
          height: "170",
          mass: "75",
          hair_color: "grey",
          skin_color: "pale",
          eye_color: "yellow",
          birth_year: "82BBY",
          gender: "male",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boba Fett",
          height: "183",
          mass: "78.2",
          hair_color: "black",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "31.5BBY",
          gender: "male",
          planetId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "IG-88",
          height: "200",
          mass: "140",
          hair_color: "none",
          skin_color: "metal",
          eye_color: "red",
          birth_year: "15BBY",
          gender: "none",
          planetId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bossk",
          height: "190",
          mass: "113",
          hair_color: "none",
          skin_color: "green",
          eye_color: "red",
          birth_year: "53BBY",
          gender: "male",
          planetId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lando Calrissian",
          height: "177",
          mass: "79",
          hair_color: "black",
          skin_color: "dark",
          eye_color: "brown",
          birth_year: "31BBY",
          gender: "male",
          planetId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lobot",
          height: "175",
          mass: "79",
          hair_color: "none",
          skin_color: "light",
          eye_color: "blue",
          birth_year: "37BBY",
          gender: "male",
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ackbar",
          height: "180",
          mass: "83",
          hair_color: "none",
          skin_color: "brown mottle",
          eye_color: "orange",
          birth_year: "41BBY",
          gender: "male",
          planetId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mon Mothma",
          height: "150",
          mass: "unknown",
          hair_color: "auburn",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "48BBY",
          gender: "female",
          planetId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Arvel Crynyd",
          height: "unknown",
          mass: "unknown",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "unknown",
          gender: "male",
          planetId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wicket Systri Warrick",
          height: "88",
          mass: "20",
          hair_color: "brown",
          skin_color: "brown",
          eye_color: "brown",
          birth_year: "8BBY",
          gender: "male",
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nien Nunb",
          height: "160",
          mass: "68",
          hair_color: "none",
          skin_color: "grey",
          eye_color: "black",
          birth_year: "unknown",
          gender: "male",
          planetId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Qui-Gon Jinn",
          height: "193",
          mass: "89",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "92BBY",
          gender: "male",
          planetId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nute Gunray",
          height: "191",
          mass: "90",
          hair_color: "none",
          skin_color: "mottled green",
          eye_color: "red",
          birth_year: "unknown",
          gender: "male",
          planetId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Finis Valorum",
          height: "170",
          mass: "unknown",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "91BBY",
          gender: "male",
          planetId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Padmé Amidala",
          height: "185",
          mass: "45",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "46BBY",
          gender: "female",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jar Jar Binks",
          height: "196",
          mass: "66",
          hair_color: "none",
          skin_color: "orange",
          eye_color: "orange",
          birth_year: "52BBY",
          gender: "male",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roos Tarpals",
          height: "224",
          mass: "82",
          hair_color: "none",
          skin_color: "grey",
          eye_color: "orange",
          birth_year: "unknown",
          gender: "male",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rugor Nass",
          height: "206",
          mass: "unknown",
          hair_color: "none",
          skin_color: "green",
          eye_color: "orange",
          birth_year: "unknown",
          gender: "male",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ric Olié",
          height: "183",
          mass: "unknown",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "unknown",
          gender: "male",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Watto",
          height: "137",
          mass: "unknown",
          hair_color: "black",
          skin_color: "blue, grey",
          eye_color: "yellow",
          birth_year: "unknown",
          gender: "male",
          planetId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sebulba",
          height: "112",
          mass: "40",
          hair_color: "none",
          skin_color: "grey, red",
          eye_color: "orange",
          birth_year: "unknown",
          gender: "male",
          planetId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quarsh Panaka",
          height: "183",
          mass: "unknown",
          hair_color: "black",
          skin_color: "dark",
          eye_color: "brown",
          birth_year: "62BBY",
          gender: "male",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shmi Skywalker",
          height: "163",
          mass: "unknown",
          hair_color: "black",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "72BBY",
          gender: "female",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darth Maul",
          height: "175",
          mass: "80",
          hair_color: "none",
          skin_color: "red",
          eye_color: "yellow",
          birth_year: "54BBY",
          gender: "male",
          planetId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bib Fortuna",
          height: "180",
          mass: "unknown",
          hair_color: "none",
          skin_color: "pale",
          eye_color: "pink",
          birth_year: "unknown",
          gender: "male",
          planetId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ayla Secura",
          height: "178",
          mass: "55",
          hair_color: "none",
          skin_color: "blue",
          eye_color: "hazel",
          birth_year: "48BBY",
          gender: "female",
          planetId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ratts Tyerel",
          height: "79",
          mass: "15",
          hair_color: "none",
          skin_color: "grey, blue",
          eye_color: "unknown",
          birth_year: "unknown",
          gender: "male",
          planetId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dud Bolt",
          height: "94",
          mass: "45",
          hair_color: "none",
          skin_color: "blue, grey",
          eye_color: "yellow",
          birth_year: "unknown",
          gender: "male",
          planetId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gasgano",
          height: "122",
          mass: "unknown",
          hair_color: "none",
          skin_color: "white, blue",
          eye_color: "black",
          birth_year: "unknown",
          gender: "male",
          planetId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ben Quadinaros",
          height: "163",
          mass: "65",
          hair_color: "none",
          skin_color: "grey, green, yellow",
          eye_color: "orange",
          birth_year: "unknown",
          gender: "male",
          planetId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mace Windu",
          height: "188",
          mass: "84",
          hair_color: "none",
          skin_color: "dark",
          eye_color: "brown",
          birth_year: "72BBY",
          gender: "male",
          planetId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ki-Adi-Mundi",
          height: "198",
          mass: "82",
          hair_color: "white",
          skin_color: "pale",
          eye_color: "yellow",
          birth_year: "92BBY",
          gender: "male",
          planetId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kit Fisto",
          height: "196",
          mass: "87",
          hair_color: "none",
          skin_color: "green",
          eye_color: "black",
          birth_year: "unknown",
          gender: "male",
          planetId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eeth Koth",
          height: "171",
          mass: "unknown",
          hair_color: "black",
          skin_color: "brown",
          eye_color: "brown",
          birth_year: "unknown",
          gender: "male",
          planetId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adi Gallia",
          height: "184",
          mass: "50",
          hair_color: "none",
          skin_color: "dark",
          eye_color: "blue",
          birth_year: "unknown",
          gender: "female",
          planetId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saesee Tiin",
          height: "188",
          mass: "unknown",
          hair_color: "none",
          skin_color: "pale",
          eye_color: "orange",
          birth_year: "unknown",
          gender: "male",
          planetId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yarael Poof",
          height: "264",
          mass: "unknown",
          hair_color: "none",
          skin_color: "white",
          eye_color: "yellow",
          birth_year: "unknown",
          gender: "male",
          planetId: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plo Koon",
          height: "188",
          mass: "80",
          hair_color: "none",
          skin_color: "orange",
          eye_color: "black",
          birth_year: "22BBY",
          gender: "male",
          planetId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mas Amedda",
          height: "196",
          mass: "unknown",
          hair_color: "none",
          skin_color: "blue",
          eye_color: "blue",
          birth_year: "unknown",
          gender: "male",
          planetId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gregar Typho",
          height: "185",
          mass: "85",
          hair_color: "black",
          skin_color: "dark",
          eye_color: "brown",
          birth_year: "unknown",
          gender: "male",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cordé",
          height: "157",
          mass: "unknown",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "unknown",
          gender: "female",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cliegg Lars",
          height: "183",
          mass: "unknown",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "82BBY",
          gender: "male",
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Poggle the Lesser",
          height: "183",
          mass: "80",
          hair_color: "none",
          skin_color: "green",
          eye_color: "yellow",
          birth_year: "unknown",
          gender: "male",
          planetId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luminara Unduli",
          height: "170",
          mass: "56.2",
          hair_color: "black",
          skin_color: "yellow",
          eye_color: "blue",
          birth_year: "58BBY",
          gender: "female",
          planetId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barriss Offee",
          height: "166",
          mass: "50",
          hair_color: "black",
          skin_color: "yellow",
          eye_color: "blue",
          birth_year: "40BBY",
          gender: "female",
          planetId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dormé",
          height: "165",
          mass: "unknown",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "unknown",
          gender: "female",
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dooku",
          height: "193",
          mass: "80",
          hair_color: "white",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "102BBY",
          gender: "male",
          planetId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bail Prestor Organa",
          height: "191",
          mass: "unknown",
          hair_color: "black",
          skin_color: "tan",
          eye_color: "brown",
          birth_year: "67BBY",
          gender: "male",
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jango Fett",
          height: "183",
          mass: "79",
          hair_color: "black",
          skin_color: "tan",
          eye_color: "brown",
          birth_year: "66BBY",
          gender: "male",
          planetId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zam Wesell",
          height: "168",
          mass: "55",
          hair_color: "blonde",
          skin_color: "fair, green, yellow",
          eye_color: "yellow",
          birth_year: "unknown",
          gender: "female",
          planetId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dexter Jettster",
          height: "198",
          mass: "102",
          hair_color: "none",
          skin_color: "brown",
          eye_color: "yellow",
          birth_year: "unknown",
          gender: "male",
          planetId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lama Su",
          height: "229",
          mass: "88",
          hair_color: "none",
          skin_color: "grey",
          eye_color: "black",
          birth_year: "unknown",
          gender: "male",
          planetId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Taun We",
          height: "213",
          mass: "unknown",
          hair_color: "none",
          skin_color: "grey",
          eye_color: "black",
          birth_year: "unknown",
          gender: "female",
          planetId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jocasta Nu",
          height: "167",
          mass: "unknown",
          hair_color: "white",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "unknown",
          gender: "female",
          planetId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "R4-P17",
          height: "96",
          mass: "unknown",
          hair_color: "none",
          skin_color: "silver, red",
          eye_color: "red, blue",
          birth_year: "unknown",
          gender: "female",
          planetId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wat Tambor",
          height: "193",
          mass: "48",
          hair_color: "none",
          skin_color: "green, grey",
          eye_color: "unknown",
          birth_year: "unknown",
          gender: "male",
          planetId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "San Hill",
          height: "191",
          mass: "unknown",
          hair_color: "none",
          skin_color: "grey",
          eye_color: "gold",
          birth_year: "unknown",
          gender: "male",
          planetId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shaak Ti",
          height: "178",
          mass: "57",
          hair_color: "none",
          skin_color: "red, blue, white",
          eye_color: "black",
          birth_year: "unknown",
          gender: "female",
          planetId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grievous",
          height: "216",
          mass: "159",
          hair_color: "none",
          skin_color: "brown, white",
          eye_color: "green, yellow",
          birth_year: "unknown",
          gender: "male",
          planetId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tarfful",
          height: "234",
          mass: "136",
          hair_color: "brown",
          skin_color: "brown",
          eye_color: "blue",
          birth_year: "unknown",
          gender: "male",
          planetId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Raymus Antilles",
          height: "188",
          mass: "79",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "unknown",
          gender: "male",
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sly Moore",
          height: "178",
          mass: "48",
          hair_color: "none",
          skin_color: "pale",
          eye_color: "white",
          birth_year: "unknown",
          gender: "female",
          planetId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tion Medon",
          height: "206",
          mass: "80",
          hair_color: "none",
          skin_color: "grey",
          eye_color: "black",
          birth_year: "unknown",
          gender: "male",
          planetId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("people", null, {});
  },
};
