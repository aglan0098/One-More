import React from "react";
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";

import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";

export default function InGym() {
  return (
    <>
      <SecondNavbar />
      {/* ================= Header ============== */}
      <Header title={"#Trainin with the Coach"} img={inGYM} />

      {/* =============== Methods ============ */}
      <div className="container-fluid dark text-light px-4 py-4">
        <div className="row pb-5" style={{ borderBottom: `4px solid #dc3545` }}>
          <div className="col-md-7">
            <img src={online} className="w-100" />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3 className="mb-4 hack-font-md">
              Coach <span className="text-danger fw-bold">ESLAM</span>
            </h3>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              hic autem enim incidunt at asperiores sit id animi, officiis,
              nisi, aspernatur culpa dolores repellat. Necessitatibus nostrum
              officiis voluptas sint, sunt fugit optio voluptatem veniam iusto.
              Amet illo hic excepturi magni?
            </p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12">
            <div class="reason">
              <span class="text">I don’t have time.</span>
            </div>
            <div class="reason">
              <span class="text">I'm not fit enough.</span>
            </div>
            <div class="reason">
              <span class="text">I'm tried everything.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Reasons ================ */}
      <div className="container-fluid">
        <div className="row gap-3 py-5 px-5">
          <div className="col-md gray rounded px-0">
            <img src={inGYM} className="w-100" />
            <div className="px-2" style={{ borderTop: `3px solid #aa0000` }}>
              <h3 className="fw-bold my-3">Reason 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi soluta dolorem aut, est minima voluptate sunt enim
                distinctio eum eius architecto
              </p>
            </div>
          </div>

          <div className="col-md gray rounded px-0">
            <img src={online} className="w-100" />
            <div className="px-2" style={{ borderTop: `3px solid #aa0000` }}>
              <h3 className="fw-bold my-3">Reason 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi soluta dolorem aut, est minima voluptate sunt enim
                distinctio eum eius architecto
              </p>
            </div>
          </div>

          <div className="col-md gray rounded px-0">
            <img src={inGYM} className="w-100" />
            <div className="px-2" style={{ borderTop: `3px solid #aa0000` }}>
              <h3 className="fw-bold my-3">Reason 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi soluta dolorem aut, est minima voluptate sunt enim
                distinctio eum eius architecto
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid dark text-light px-4 py-4">
        <div className="row pb-5" style={{ borderBottom: `4px solid #dc3545` }}>
          <div className="col-md-7">
            <img src={online} className="w-100" />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3 className="mb-4 hack-font-md">
              Coach <span className="text-danger fw-bold">ESLAM</span>
            </h3>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              hic autem enim incidunt at asperiores sit id animi, officiis,
              nisi, aspernatur culpa dolores repellat. Necessitatibus nostrum
              officiis voluptas sint, sunt fugit optio voluptatem veniam iusto.
              Amet illo hic excepturi magni?
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3 className="hack-font-md">
              Coach <span className="text-danger fw-bold">SAMA</span>
            </h3>
            <p className="lead py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              hic autem enim incidunt at asperiores sit id animi, officiis,
              nisi, aspernatur culpa dolores repellat. Necessitatibus nostrum
              officiis voluptas sint, sunt fugit optio voluptatem veniam iusto.
              Amet illo hic excepturi magni?
            </p>
          </div>
          <div className="col-md-7">
            <img src={inGYM} className="w-100" />
          </div>
        </div>
      </div>

      <a
        className="btn btn-success mt-4 p-2"
        style={{
          position: `absolute`,
          bottom: `40px`,
          right: `30px`,
          zIndex: `10`,
          position: `fixed`,
          borderRadius: `50%`
        }}
        href="https://wa.me/+201144426901"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fs-1 bx bxl-whatsapp bx-flip-horizontal bx-tada"></i>
      </a>
    </>
  );
}
