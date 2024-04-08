export type Tutorial = {
  id: string;
  title: string;
  steps: {
    id: string;
    title: string;
    description: string;
    imgUrl: string;
  }[];
};
