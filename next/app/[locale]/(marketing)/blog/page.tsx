import { type Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/elements/heading";
import { Subheading } from "@/components/elements/subheading";
import { BlogCard } from "@/components/blog-card";
import { FeatureIconContainer } from "@/components/dynamic-zone/features/feature-icon-container";
import { IconClipboardText } from "@tabler/icons-react";
import { BlogPostRows } from "@/components/blog-post-rows";
import { AmbientColor } from "@/components/decorations/ambient-color";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Article } from "@/types/types";
import { generateMetadataObject } from '@/lib/shared/metadata';

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiArrowRight } from "@/assets/icons/vander"
import { strapiImage } from "@/lib/strapi/strapiImage";


export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const pageData = await fetchContentType('blog-page', `filters[locale]=${params.locale}&populate=seo.metaImage`, true)

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function Blog({
  params,
}: {
  params: { locale: string };
}) {
  const blogPage = await fetchContentType('blog-page', `filters[locale]=${params.locale}`, true)
  const articles = await fetchContentType('articles', `filters[locale]=${params.locale}`)

  return (
    <>
      {/* <div className="relative overflow-hidden py-20 md:py-0">
        <AmbientColor />
        <Container className="flex flex-col items-center justify-between pb-20">
          <div className="relative z-20 py-10 md:pt-40">
            <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
              <IconClipboardText className="h-6 w-6 text-white" />
            </FeatureIconContainer>
            <Heading as="h1" className="mt-4">
              {blogPage.heading}
            </Heading>
            <Subheading className="max-w-3xl mx-auto">
              {blogPage.sub_heading}
            </Subheading>
          </div>

          {articles.data.slice(0, 1).map((article: Article) => (
            <BlogCard article={article} locale={params.locale} key={article.title} />
          ))}

          <BlogPostRows articles={articles.data} />
        </Container>
      </div> */}
      {/*-------------------------------------------------------------------------*/}
      <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url(${strapiImage(blogPage.header_image.url)})` }}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold page-heading text-white title-dark">{blogPage.heading}</h5>
                <p className="text-white-50 para-desc mx-auto mb-0">{blogPage.sub_heading}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <BlogPostRows articles={articles.data} />
          </div>

          {/* <div className="row">
            <div className="col-12">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true"><i className="mdi mdi-chevron-left mdi-18px"></i></span>
                  </Link>
                </li>
                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true"><i className="mdi mdi-chevron-right mdi-18px"></i></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
