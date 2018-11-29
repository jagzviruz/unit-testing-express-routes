export const listUsers = (req, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res.send({
        users: [
          {
            "_id": "5bff8180689ff44e6850995c",
            "index": 0,
            "guid": "4e0911fe-f89c-49e5-b97a-e5bbf5e49f8f",
            "isActive": true,
            "balance": "$1,941.80",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "eyeColor": "brown",
            "name": {
              "first": "Delaney",
              "last": "Oneill"
            },
            "company": "INSURESYS",
            "email": "delaney.oneill@insuresys.tv",
            "phone": "+1 (842) 513-2839",
            "address": "292 Rewe Street, Boomer, Louisiana, 899",
            "about": "Magna velit labore commodo ut eu. Dolore aliquip dolor ullamco aliquip duis dolore ipsum consequat sit elit ut laborum. Non voluptate deserunt nulla excepteur anim ea.",
            "registered": "Friday, November 17, 2017 4:02 AM",
            "latitude": "-55.0501",
            "longitude": "-175.057049",
            "tags": [
              "dolore",
              "fugiat",
              "qui",
              "dolore",
              "dolor"
            ],
            "range": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "friends": [
              {
                "id": 0,
                "name": "Ava Mclaughlin"
              },
              {
                "id": 1,
                "name": "Dudley Horne"
              },
              {
                "id": 2,
                "name": "Candice Gregory"
              }
            ],
            "greeting": "Hello, Delaney! You have 10 unread messages.",
            "favoriteFruit": "apple"
          },
          {
            "_id": "5bff81803df46fb4b66bdfa6",
            "index": 1,
            "guid": "62dc6040-4b08-4912-98a8-77f4167a3d86",
            "isActive": false,
            "balance": "$3,358.21",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "green",
            "name": {
              "first": "Jerry",
              "last": "Ray"
            },
            "company": "EPLOSION",
            "email": "jerry.ray@eplosion.biz",
            "phone": "+1 (919) 497-2260",
            "address": "429 Seigel Street, Nanafalia, Federated States Of Micronesia, 3747",
            "about": "Aliqua id incididunt dolor amet tempor aliqua officia. Proident elit minim id sint. Aliquip exercitation dolor sunt nostrud. Deserunt ex voluptate excepteur in officia. Adipisicing elit non dolore sunt. Occaecat enim dolore minim reprehenderit et Lorem nisi ipsum.",
            "registered": "Sunday, September 10, 2017 7:06 AM",
            "latitude": "-57.106526",
            "longitude": "140.126503",
            "tags": [
              "commodo",
              "tempor",
              "excepteur",
              "irure",
              "consectetur"
            ],
            "range": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "friends": [
              {
                "id": 0,
                "name": "Elsa Sanchez"
              },
              {
                "id": 1,
                "name": "Amalia Henderson"
              },
              {
                "id": 2,
                "name": "Anastasia Dyer"
              }
            ],
            "greeting": "Hello, Jerry! You have 9 unread messages.",
            "favoriteFruit": "banana"
          },
          {
            "_id": "5bff8180f18f4211cebb85d2",
            "index": 2,
            "guid": "e2c116aa-7a5e-46ad-984b-9ac88ab96159",
            "isActive": true,
            "balance": "$1,666.96",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "green",
            "name": {
              "first": "Tanner",
              "last": "Garcia"
            },
            "company": "ZOUNDS",
            "email": "tanner.garcia@zounds.name",
            "phone": "+1 (921) 405-2784",
            "address": "394 Ridgecrest Terrace, Cawood, Maryland, 4205",
            "about": "Do duis qui incididunt minim incididunt ex. Sint veniam et laboris duis nostrud duis id commodo duis elit irure duis qui amet. Sunt Lorem excepteur exercitation minim ad cillum commodo. Ipsum cupidatat reprehenderit mollit minim minim nostrud sint aute laboris labore aute deserunt. Adipisicing eiusmod commodo elit nostrud duis sunt culpa consectetur. Anim magna ullamco eu consequat sit eiusmod laboris do eu ea.",
            "registered": "Monday, May 23, 2016 6:30 PM",
            "latitude": "68.904411",
            "longitude": "133.305036",
            "tags": [
              "nulla",
              "ea",
              "cillum",
              "velit",
              "est"
            ],
            "range": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "friends": [
              {
                "id": 0,
                "name": "Carroll Beck"
              },
              {
                "id": 1,
                "name": "Rivera Sutton"
              },
              {
                "id": 2,
                "name": "Rita Hall"
              }
            ],
            "greeting": "Hello, Tanner! You have 7 unread messages.",
            "favoriteFruit": "apple"
          },
          {
            "_id": "5bff818058382f35898774a6",
            "index": 3,
            "guid": "357e1d52-f3b5-4a88-8a18-09a8f72ed5bf",
            "isActive": true,
            "balance": "$2,256.35",
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "eyeColor": "blue",
            "name": {
              "first": "Hood",
              "last": "Nicholson"
            },
            "company": "EWAVES",
            "email": "hood.nicholson@ewaves.org",
            "phone": "+1 (994) 423-3602",
            "address": "660 Sandford Street, Woodruff, Minnesota, 9656",
            "about": "Fugiat irure aute aute duis culpa sit minim. Adipisicing ipsum dolore excepteur ea anim do id reprehenderit voluptate cupidatat labore elit. Sit adipisicing ut et laboris sint velit deserunt non labore sit quis Lorem. Commodo anim aute consectetur commodo. Eu nulla laboris exercitation eiusmod aute ullamco.",
            "registered": "Wednesday, June 11, 2014 4:30 AM",
            "latitude": "-43.135035",
            "longitude": "47.416843",
            "tags": [
              "officia",
              "ut",
              "aliqua",
              "laboris",
              "veniam"
            ],
            "range": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "friends": [
              {
                "id": 0,
                "name": "Suarez Castillo"
              },
              {
                "id": 1,
                "name": "Atkinson Mcbride"
              },
              {
                "id": 2,
                "name": "Davis Murray"
              }
            ],
            "greeting": "Hello, Hood! You have 7 unread messages.",
            "favoriteFruit": "strawberry"
          },
          {
            "_id": "5bff81806ff1f0c435dd5978",
            "index": 4,
            "guid": "1f27fd03-4a17-461d-b542-bb9c58d6bbf4",
            "isActive": true,
            "balance": "$1,003.52",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "green",
            "name": {
              "first": "Small",
              "last": "Witt"
            },
            "company": "ZILENCIO",
            "email": "small.witt@zilencio.co.uk",
            "phone": "+1 (852) 515-2749",
            "address": "702 Ocean Avenue, Lutsen, Colorado, 582",
            "about": "In et aliquip officia deserunt excepteur exercitation veniam ullamco est dolore pariatur. Dolor excepteur laboris sint enim laboris fugiat sit in ea nostrud id. Enim et amet deserunt qui ex ut excepteur. Dolor ullamco laborum ut eiusmod est anim fugiat. Velit dolore incididunt sunt pariatur tempor aliquip deserunt minim dolore culpa nisi in.",
            "registered": "Tuesday, November 22, 2016 6:05 PM",
            "latitude": "86.961785",
            "longitude": "-177.917947",
            "tags": [
              "incididunt",
              "id",
              "et",
              "cillum",
              "fugiat"
            ],
            "range": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "friends": [
              {
                "id": 0,
                "name": "Kristin Obrien"
              },
              {
                "id": 1,
                "name": "Magdalena Collier"
              },
              {
                "id": 2,
                "name": "Brooks Austin"
              }
            ],
            "greeting": "Hello, Small! You have 5 unread messages.",
            "favoriteFruit": "banana"
          },
          {
            "_id": "5bff81802c5c1692cc6c5f35",
            "index": 5,
            "guid": "28628f3d-ecac-470d-8889-54a2533ceb60",
            "isActive": true,
            "balance": "$2,626.59",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "brown",
            "name": {
              "first": "Vonda",
              "last": "Duncan"
            },
            "company": "ROBOID",
            "email": "vonda.duncan@roboid.biz",
            "phone": "+1 (827) 518-3375",
            "address": "683 Beacon Court, Dixie, Oregon, 1524",
            "about": "Minim anim aliqua do adipisicing voluptate occaecat non dolore in ad eu sunt culpa duis. Irure aute qui pariatur id enim nisi aliquip voluptate qui cillum. In consequat non proident do cupidatat duis sunt reprehenderit. Anim officia ex anim aute eu cupidatat aute consequat eu duis in nisi voluptate ea. Ad ut qui dolor amet ex. Ipsum magna in pariatur irure. Velit laborum do excepteur eiusmod ut irure fugiat nostrud elit Lorem exercitation.",
            "registered": "Friday, December 18, 2015 3:27 PM",
            "latitude": "67.027074",
            "longitude": "-68.662581",
            "tags": [
              "commodo",
              "culpa",
              "magna",
              "dolor",
              "eiusmod"
            ],
            "range": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ],
            "friends": [
              {
                "id": 0,
                "name": "Moses Winters"
              },
              {
                "id": 1,
                "name": "Sara Mcdaniel"
              },
              {
                "id": 2,
                "name": "Roslyn Leon"
              }
            ],
            "greeting": "Hello, Vonda! You have 7 unread messages.",
            "favoriteFruit": "strawberry"
          }
        ]
      });
    }, 3000);
  });

}
