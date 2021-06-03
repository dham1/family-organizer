const INITIAL_STATE = {
  sections: [
    {
      title: 'Cactus & Succulents',
      imageUrl: 'https://i.ibb.co/8501Hz9/suculenta-Cal.jpg',
      id: 1,
      linkUrl: 'shop/cactus%20&%20succulents'
    },
    {
      title: 'Floral Arrangements',
      imageUrl: 'https://i.ibb.co/ThSMyz6/IMG-0402.jpg',
      id: 2,
      linkUrl: 'shop/floral%20arrangements'
    },
    {
      title: 'Flower Plants',
      imageUrl: 'https://i.ibb.co/tXzC0KD/lalele-Roz.jpg',
      id: 3,
      linkUrl: 'shop/flower%20plants'
    },
    {
      title: 'Green Plants',
      imageUrl: 'https://i.ibb.co/Bf2sVRC/40736-CB3-D0-ED-4-D33-8-C15-736-DC57-ACE4-D.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/green%20plants'
    },
    {
      title: 'purifying%20plants',
      imageUrl: 'https://i.ibb.co/bzWJBd6/0473695-B-C797-4-C27-9-FBD-451-B91928-B49.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/purifying%20plants'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
