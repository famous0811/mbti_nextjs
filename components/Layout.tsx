import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

import "style/style.scss";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "무로 성격 유형 검사, 성격 유형 설명, 인간관계 및 직장생활 어드바이스 | 16Personalities",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <article>{children}</article>
    <Footer />
  </div>
);

export default Layout;
