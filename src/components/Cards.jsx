import { swiperContents } from '../constants';
import styles from '../style';

const Cards = () => (
  <section
    className={`${styles.boxWidth} my-6 flex flex-wrap justify-center gap-3`}
  >
    {swiperContents.map((content) => (
      <div className="w-[150px] overflow-hidden rounded-md bg-white">
        <img
          src={content.img}
          alt={content.id}
          className="aspect-video object-cover"
        />
        <div className="py-2 px-2">
          <h1 className="w-2/3 text-xs font-bold">{content.title}</h1>
          <p className="mt-2 text-[6px] font-medium line-clamp-3">
            {content.text}
          </p>
        </div>
      </div>
    ))}
  </section>
);

export default Cards;
