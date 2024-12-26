import { youtuberList } from "../assets/data";
import { CategoryCapsule } from "./CategoryCapsule";

export const Youtubers = () => {
  return (
    <div>
      {youtuberList.map(({ id, name, description, url, category }) => (
        <div key={id}>
          <CategoryCapsule category={category} />
          <p>{name}</p>
          <p>{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            go
          </a>
        </div>
      ))}
    </div>
  );
};
