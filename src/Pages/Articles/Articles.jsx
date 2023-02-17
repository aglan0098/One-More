import React, { useState, useEffect } from "react";
// ----------- Sanity --------------
import { client } from "../../../lib/client";
// ---------- Images -------------
import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";
// ---------- Components ----------
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import ArticleCard from "../../Components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "articles"]')
      .then((data) => setArticles(data))
      .catch(console.error);
  }, []);

  // ================= filter =========
  const allcategories = ["all", "health", "mm"];

  const filter = (category) => {
    if (category === "all") {
      client
        .fetch('*[_type == "articles"]')
        .then((data) => setArticles(data))
        .catch(console.error);
      return;
    }
    setArticles(articles.filter((article) => article.category === category));
  };

  return (
    <>
      <SecondNavbar />
      {/* ---------- Header ------------ */}
      <Header title={"#READ"} img={inGYM} />

      {/* =========== Content ========= */}
      <div className="container-fluid d-flex py-5">
        <div className="row py-5">
          <div className="filter-container col-lg-2 gray-dark px-0 text-center">
            {allcategories.map((category, index) => (
              <button
                className="filterBtn d-lg-block btn-2 fw-bold text-capitalize mb-2"
                onClick={() => filter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="col-lg-10">
            <div className="bd-grid">
              {articles &&
                articles.map((article) => <ArticleCard article={article} />)}
            </div>
          </div>
        </div>
      </div>

      {/* =========== Insta Images ========= */}
      <div className="images">
        <h2 className="hack-font-lg fw-bold text-center text-dark">
          #ONE_MORE
        </h2>
        <div className="container m-auto gap-3 row py-4 px-0">
          <div className="col-md px-0" style={{ overflow: `hidden` }}>
            <img src={online} className="h-100 insta-img" />
          </div>

          <div className="col-md px-0">
            <div className="mb-3 bg-primary" style={{ overflow: `hidden` }}>
              <img src={inGYM} className="w-100 insta-img" />
            </div>
            <div style={{ overflow: `hidden` }}>
              <img src={online} className="w-100 insta-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
