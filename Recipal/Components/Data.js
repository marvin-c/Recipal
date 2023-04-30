const Data = [  //This code contains the image file path arrays for the Carousels displayed on the User Profile page
  {
    id: 0,
    title: 'Carousel 1',
    images: [
      require('../assets/recipe1.png'),
      require('../assets/recipe2.png'),
      require('../assets/recipe3.png'),
    ],
  },
  {
    id: 1,
    title: 'Carousel 2',
    images: [
      require('../assets/recipe4.png'),
      require('../assets/recipe5.png'),
      require('../assets/recipe6.png'),
    ],
  },
  {
    id: 2,
    title: 'Carousel 3',
    images: [
      require('../assets/recipe7.png'),
      require('../assets/recipe8.png'),
      require('../assets/recipe1.png'),
      require('../assets/addrecipe.png'),
    ],
  },
  {
    id: 3,
    title: 'Carousel 3',
    images: [
      require('../assets/redSnapper0.png'),
      require('../assets/redSnapper1.jpg'),
      require('../assets/redSnapper2.jpg'),
    ],
  },
];

export default Data;


/*  //This is the old code for web images
const Data = [
  {
    imgUrl: require("../assets/recipe1.png"),
    title: "Aenean leo",
  },
  {
    imgUrl: require("../assets/recipe2.png"),
    title: "In turpis",
  },
  {
    imgUrl: require("../assets/recipe3.png"), //imgUrl: "https://picsum.photos/id/12/200/300", - for web hosted images
    title: "Lorem Ipsum",
  },
];

export default Data;
*/