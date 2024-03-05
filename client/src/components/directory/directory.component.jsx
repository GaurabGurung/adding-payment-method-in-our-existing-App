import DirectoryItem from "../directory-item/directory-item.component";
import Slider from "../slider/slider.component";
import { DirectoryContainer, DirectoryHeader } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://images.pexels.com/photos/7543640/pexels-photo-7543640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://images.pexels.com/photos/5622630/pexels-photo-5622630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <>
      <DirectoryHeader>SEARCH BY CATEGORY</DirectoryHeader>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </>
  );
};

export default Directory;
