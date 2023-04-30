import { Link } from 'react-router-dom';
import { swiperContents } from '../constants';
import styles from '../style';

const Cards = () => (
  <section
    className={`${styles.boxWidth} my-6 flex flex-wrap justify-center gap-3`}
  >
    {swiperContents.map((content) => (
      <Link
        to={`/articles/${content.id}`}
        key={content.id}
        className="group w-[150px] overflow-hidden rounded-md bg-white md:w-[270px] xl:w-[320px]"
      >
        <div className="aspect-video">
          <img
            src={content.img}
            alt={content.id}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="py-2 px-2">
          <h1 className="w-2/3 text-xs font-bold transition-all group-hover:text-orange-700 md:text-base xl:text-xl">
            {content.title}
          </h1>
          <p className="xl:line mt-2 text-[6px] font-medium line-clamp-3 md:text-[10px] xl:line-clamp-4">
            {content.text}
          </p>
        </div>
      </Link>
    ))}
  </section>
);

export default Cards;
