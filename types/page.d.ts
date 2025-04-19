import type { Metadata } from "next";
import type { ReactNode } from "react";

export type PageComponent = (props: PageProps) => ReactNode | Promise<ReactNode>;
export type LayoutComponent = (props: LayoutProps) => ReactNode | Promise<ReactNode>;

export type GenerateMetadata = (props: PageProps) => Metadata | Promise<Metadata>;
export type GenerateStaticParams = () => any[] | Promise<any[]>;
