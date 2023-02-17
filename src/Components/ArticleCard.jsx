import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";

export default function ArticleCard(props) {
  const { article } = props;
  const { image, title } = article;
  return (
    <>
      <div className="rounded articleCard gray">
        <img src={urlFor(image[0])} className="w-100 h-50" />
        <div className="px-2" style={{ borderTop: `3px solid #aa0000` }}>
          <h3 className="fw-bold mt-3 mb-4">{title}</h3>
          <Link to={`/articles/${title}`} state={article}>
            <button className="btn-1 fw-bold fs-5">Read</button>
          </Link>
        </div>
      </div>
    </>
  );
}
