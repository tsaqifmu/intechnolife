import { useParams } from 'react-router-dom';
import { articlesDetail } from '../constants/index.js';
import styles from '../style.js';

const ArticlesDetail = () => {
  const params = useParams();

  //  find the article
  const article = articlesDetail.find((p) => p.id === params.id);

  return (
    <div className='flex justify-center'>
      <section className={`${styles.boxWidth} px-5 `}>
        <h1 className="mb-6 text-3xl font-extrabold md:text-[52px]">
          {article.title}
        </h1>
        {article.articles.map((section) => (
          <div key={section.title}>
            <img src={section.img} alt="" />
            <div className="py-5 text-base md:text-xl">
              <h3 className="py-5 font-bold md:text-xl">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArticlesDetail;
