
export type RootLayout =  Readonly<{
  children: React.ReactNode;
}>

export type Model = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    dateAdded: string;
}