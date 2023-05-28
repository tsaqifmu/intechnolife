import { Link } from 'react-router-dom';
import { swiperContents } from '../constants';
import styles from '../style';

const Cards = () => (
  <div className="border-t-[5px] border-slate-700">
    <h1 className="pt-2 pb-5 text-2xl font-bold xl:pb-10">Electronic</h1>
    <section className="flex flex-col gap-y-5 md:flex-row md:flex-wrap xl:justify-center  ">
      {swiperContents.map((content) => (
        <Link
          to={`/articles/${content.id}`}
          key={content.id}
          className={`${styles.flexStart} group h-[100px] w-full overflow-hidden md:flex md:h-full md:w-1/2 md:flex-col xl:w-1/3 `}
        >
          <img
            src={content.img}
            alt={content.id}
            className="h-[100px] w-[100px] object-cover md:aspect-video"
          />

          <div className=" ml-3 h-full border-t-2 border-slate-700 md:border-t-0">
            <h1 className=" text-xl font-bold transition-all group-hover:text-orange-700 md:text-2xl ">
              {content.title}
            </h1>
            <p className="text-sm font-normal line-clamp-2 md:text-base xl:line-clamp-4">
              {content.text}
            </p>
          </div>
        </Link>
      ))}
    </section>
  </div>
);

export default Cards;
