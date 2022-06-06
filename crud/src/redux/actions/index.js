import { EDIT, DELETE } from "../constants";

export const handleEdit = (value) => {
  return {
    type: EDIT,
    payload: value,
  };
};

export const handleDelete = (value) => {
  return {
    type: DELETE,
    payload: value,
  };
};
