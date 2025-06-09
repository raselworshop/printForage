import { ReactNode } from "react";
// This file contains type definitions for various components and data structures used in the application.
export type RootLayout =  Readonly<{
  children: ReactNode;
}>;

// data Types
export type Model = {
    id: number;
    title: string;
    description: string;
    likes: number;
    image: string;
    category: string;
    dateAdded: string;
}

// post Types
// This is a type definition for a Post object.
export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type ModelDetailsPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type ModelCardProps = {
  model: Model;
}

export type PillarCardProps = {
  children: ReactNode;
  className?: string;
}