// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  email: string;
  password: string;
  role: string;
};

export type FormattedUsersTable = {
  id: string;
  email: string;
  role: string;
};
export type UserForm = {
  id: string;
  email: string;
  createdAt: Date;
  role: string;
};
