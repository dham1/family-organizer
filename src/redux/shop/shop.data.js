const SHOP_DATA = {
  succulents: {
    id: 1,
    title: 'Cactus & Succulents',
    routeName: 'succulents',
    items: [
      {
        id: 1,
        name: "Hairy Cactus",
        imageUrl: 'https://i.ibb.co/nj4HjX2/IMG-0617.jpg', //cactus
        price: 10
      },
      {
        id: 2,
        name: 'Cactus with Yellow Spikes',
        imageUrl: 'https://i.ibb.co/S7FJ0F0/IMG-0616.jpg', //casctus
        price: 10
      },
      {
        id: 3,
        name: 'Cactus with White Spikes',
        imageUrl: 'https://i.ibb.co/DtfvDCH/cactus-Tepos.jpg',
        price: 10
      },
      {
        id: 4,
        name: "Donkey's tail small",
        imageUrl: 'https://i.ibb.co/8501Hz9/suculenta-Cal.jpg',
        price: 10
      },
      {
        id: 5,
        name: 'Assorted Giant Cactus 1 piece',
        imageUrl: 'https://i.ibb.co/fXKzPdv/cactusi-Multi.jpg',
        price: 250
      },
      {
        id: 6,
        name: "Donkey's tail medium",
        imageUrl: 'https://i.ibb.co/4MM4zfS/suculenta10.jpg',
        price: 25
      },
      {
        id: 7,
        name: 'Haworthia medium',
        imageUrl: 'https://i.ibb.co/M1wHNFw/suculenta1.jpg',
        price: 23
      },

      {
        id: 9,
        name: 'Assorted Haworthia set of 9',
        imageUrl: 'https://i.ibb.co/nQ5tTPn/assoreted-succulent.jpg',
        price: 40
      }
    ]
  },
  arrangements: {
    id: 2,
    title: 'Floral Arrangements',
    routeName: 'arrangements',
    items: [
      {
        id: 10,
        name: 'Rose in a jar',
        imageUrl: 'https://i.ibb.co/WWRGQWx/840-E86-A6-371-A-43-A3-ACCE-5-E21-F61-D96-CA.jpg', //trandafir borcan
        price: 15
      },
      {
        id: 11,
        name: 'Aerial plants and moss',
        imageUrl: 'https://i.ibb.co/YccZYJH/planta-Aeriana.jpg',
        price: 50
      },
      {
        id: 12,
        name: 'Summer arrangement',
        imageUrl: 'https://i.ibb.co/tPqknFd/IMG-1379.jpg',
        price: 55
      },
      {
        id: 13,
        name: 'Medium pink arrangement',
        imageUrl: 'https://i.ibb.co/LxZzjgt/IMG-2582.jpg',
        price: 40
      },
      {
        id: 14,
        name: 'Big pink arrangement',
        imageUrl: 'https://i.ibb.co/ThSMyz6/IMG-0402.jpg',
        price: 80
      },
      {
        id: 15,
        name: 'Purse pink arrangement',
        imageUrl: 'https://i.ibb.co/ZY2dL7V/IMG-0002.jpg',
        price: 95
      },
      {
        id: 16,
        name: 'Colorful flowers',
        imageUrl: 'https://i.ibb.co/mtKG1p8/aranjament6.jpg',
        price: 20
      },
      {
        id: 17,
        name: 'Spring arrangement',
        imageUrl: 'https://i.ibb.co/znT3tKZ/081-EB8-A4-D488-4-DC7-BFC2-758-DE612-E002.jpg',
        price: 25
      }
    ]
  },
  flowers: {
    id: 3,
    title: 'Flower Plants',
    routeName: 'flowers',
    items: [
      {
        id: 18,
        name: '15 red Tulips',
        imageUrl: 'https://i.ibb.co/HKk3tF7/lalele-Ros.jpg',
        price: 30
      },
      {
        id: 19,
        name: '15 pink Tulips',
        imageUrl: 'https://i.ibb.co/tXzC0KD/lalele-Roz.jpg',
        price: 35
      },
      {
        id: 20,
        name: '1 pink-ehite Tulip',
        imageUrl: 'https://i.ibb.co/q7B28X5/lalea-Alb-Roz.jpg',
        price: 10
      },
      {
        id: 21,
        name: 'Yellow flowers',
        imageUrl: 'https://i.ibb.co/Pg0twCr/floare-Galbena.jpg',
        price: 25
      },

    ]
  },
  greenPlants: {
    id: 4,
    title: 'Green Plants',
    routeName: 'greenPlants',
    items: [
      {
        id: 23,
        name: 'Bambus',
        imageUrl: 'https://i.ibb.co/XbXRS5f/bambus.jpg',
        price: 32
      },
      {
        id: 24,
        name: 'Ficus',
        imageUrl: 'https://i.ibb.co/QmrJ39g/65-F6749-F-6699-4-B59-9003-D7839-EE089-DC.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Hosta plant',
        imageUrl: 'https://i.ibb.co/yp7Pghm/DFC64442-8-E4-E-4642-947-E-AB1148-F419-FA.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Aglaonema',
        imageUrl: 'https://i.ibb.co/qNfDKpP/44-DDF718-039-D-42-DF-9-C13-453-E08136619.jpg',
        price: 70
      },
      {
        id: 28,
        name: 'Green plat mix',
        imageUrl: 'https://i.ibb.co/Bf2sVRC/40736-CB3-D0-ED-4-D33-8-C15-736-DC57-ACE4-D.jpg',
        price: 54
      },
    ]
  },
  purifyingPlants: {
    id: 5,
    title: 'Purifying Plants',
    routeName: 'purifyingPlants',
    items: [
      {
        id: 30,
        name: 'Peace lily',
        imageUrl: 'https://i.ibb.co/F8GqmjS/purific1.jpg',
        price: 24
      },
      {
        id: 31,
        name: 'Yellow peace lily',
        imageUrl: 'https://i.ibb.co/60mpw7W/prificator.jpg',
        price: 34
      },
      {
        id: 32,
        name: 'Spider plant',
        imageUrl: 'https://i.ibb.co/RyQXDZj/2-AF94831-DE1-F-4125-931-D-F0-DD77-AB754-C.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Dwarf date palm',
        imageUrl: 'https://i.ibb.co/YhXMs28/CEC38-A4-F-FE38-43-DD-887-A-5-EAF595-F320-F.jpg',
        price: 60
      },
      {
        id: 34,
        name: "Devil's Ivy",
        imageUrl: 'https://i.ibb.co/ChWY18Y/58-C06-A4-F-EAAB-4-EA6-81-FB-E616-A68-E5836.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Boston Fern',
        imageUrl: 'https://i.ibb.co/bzWJBd6/0473695-B-C797-4-C27-9-FBD-451-B91928-B49.jpg',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
