const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Amanuel",
          last: "Tesfaye",
        },
        picture: {
          large: "	https://randomuser.me/api/portraits/women/83.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
