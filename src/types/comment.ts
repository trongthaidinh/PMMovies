export interface Comment {
  _id: string;
  content: string;
  user: {
    _id: string;
    username: string;
    avatar?: string;
  };
  movieSlug: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}
