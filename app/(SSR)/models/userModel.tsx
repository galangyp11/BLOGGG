export interface userModel {
  _id?: String;
  name: String;
  bio: String;
  judul: String;
  slug: String;
  __v?: Boolean;
}

export interface userProps {
  props?: userModel;
}
