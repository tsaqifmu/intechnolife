import { useParams } from 'react-router-dom';
import { articlesDetail } from '../constants';

const ArticlesDetail = () => {
  const params = useParams();

  //  find the article
  const article = articlesDetail.find((p) => p.id === params.id);

  return (
    <div className="">
      <h1>{article.title}</h1>
      {article.articles.map((section) => (
        <div key={section.title}>
          <img src={section.img} alt="" />
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesDetail;
