import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

import {
  AiOutlineCalendar,
  AiOutlineUser,
  FaFacebookF,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineDribbble
} from "../assets/icons/vander";

import { Article } from "@/types/types";
import { strapiImage } from "@/lib/strapi/strapiImage";

export async function BlogLayout({
  article,
  locale,
  children,
}: {
  article: Article;
  locale: string;
  children: React.ReactNode;
}) {
  // Log do conteúdo para depurar
  console.log(article);

  // Checagem para garantir que `article.content` seja uma string válida
  const content = typeof article.content === "string" ? article.content : JSON.stringify(article.content);

  return (
    <>
      <section className="bg-half-170 d-table w-100 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="title-heading">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <AiOutlineUser className="mb-0 me-1 text-dark h5" />
                    <Link href="#" className="text-primary h6"></Link>
                  </li>
                  <li className="list-inline-item text-muted h6 ms-3">
                    <AiOutlineCalendar className="mb-0 me-1 text-dark h5" />
                    {format(new Date(article.publishedAt), "MMMM dd, yyyy")}
                  </li>
                </ul>

                <h4 className="heading text-decoration-underline mb-4">{article.title}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card rounded overflow-hidden">
                <Image
                  src={article.image ? strapiImage(article.image.url) : "/placeholder.jpg"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="img-fluid rounded shadow"
                  alt={article.title}
                />

                <div className="position-absolute bottom-0 start-0 mb-3 ms-4">
                  {article.categories?.map((category, idx) => {
                    // Verificação para garantir que `category.name` seja uma string
                    return (
                      <Link href="#" className="badge text-bg-primary me-1" key={idx}>
                        {category.name || "Categoria desconhecida"}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-1 d-md-block d-none">
                  <div className="sidebar sticky-bar">
                    <ul className="list-unstyled align-items-center social-icon social mb-0">
                      <li><Link href="#" className="rounded"><FaFacebookF /></Link></li>
                      <li><Link href="#" className="rounded mt-1"><AiOutlineInstagram /></Link></li>
                      <li><Link href="#" className="rounded mt-1"><AiOutlineTwitter /></Link></li>
                      <li><Link href="#" className="rounded mt-1"><AiFillLinkedin /></Link></li>
                      <li><Link href="#" className="rounded mt-1"><AiOutlineDribbble /></Link></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-11">
                  <div className="text-muted">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
