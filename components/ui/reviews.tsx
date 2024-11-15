"use client";

import Image from "next/image";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Reviews = () => {
  const data = [
    {
      img: "1.webp",
    },
    {
      img: "2.webp",
    },
    {
      img: "3.webp",
    },
    {
      img: "4.webp",
    },
    {
      img: "5.webp",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="card-testimonial-grid">
              <div className="box-author mb-10">
                <a href="#">
                  <Image
                    width={55}
                    height={66}
                    style={{ height: "100%" }}
                    src="/images/author.png"
                    alt="wexelcode"
                  />
                </a>
                <div className="author-info">
                  <a href="#">
                    <span className="font-md-bold fs-color-brand-2 color-brand-1 author-name">
                      Guy Hawkins
                    </span>
                  </a>
                  <span className="font-xs color-grey-500 department">
                    Bank of America
                  </span>
                </div>
              </div>
              <p className="font-md color-grey-500">
                Access the same project through five different dynamic views: a
                kanban board, Gantt chart, spreadsheet, calendar or simple task
                list. When team members can choose the work style that suits
                them best, productivity and engagement skyrocket. Maecenas
                lobortis risus.
              </p>
              <div className="card-bottom-info">
                <span className="font-xs color-grey-500 date-post">
                  29 November 2022
                </span>
                <div className="rating text-end">
                  <Image
                    width={12}
                    height={12}
                    style={{ height: "100%" }}
                    src="/images/star.svg"
                    alt="wexelcode"
                  />
                  <Image
                    width={12}
                    height={12}
                    style={{ height: "100%" }}
                    src="/images/star.svg"
                    alt="wexelcode"
                  />
                  <Image
                    width={12}
                    height={12}
                    style={{ height: "100%" }}
                    src="/images/star.svg"
                    alt="wexelcode"
                  />
                  <Image
                    width={12}
                    height={12}
                    style={{ height: "100%" }}
                    src="/images/star.svg"
                    alt="wexelcode"
                  />
                  <Image
                    width={12}
                    height={12}
                    style={{ height: "100%" }}
                    src="/images/star.svg"
                    alt="wexelcode"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
