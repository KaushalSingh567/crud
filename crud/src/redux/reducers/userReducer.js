import { EDIT, DELETE } from "../constants";

const userState = {
  rows: [
    {
      id: "1",
      firstname: "Ram",
      lastname: "singh",
      age: "23",
      gender: "male",
    },
    {
      id: "2",
      firstname: "Shyam",
      lastname: "sharma",
      age: "21",
      gender: "male",
    },
    {
      id: "3",
      firstname: "Anup",
      lastname: "verma",
      age: "22",
      gender: "male",
    },
    {
      id: "4",
      firstname: "Priya",
      lastname: "gupta",
      age: "24",
      gender: "female",
    },
    {
      id: "5",
      firstname: "Ashu",
      lastname: "yadav",
      age: "21",
      gender: "male",
    },
    {
      id: "6",
      firstname: "Gaurav",
      lastname: "chaudhary",
      age: "22",
      gender: "male",
    },
    {
      id: "7",
      firstname: "Neha",
      lastname: "thakur",
      age: "23",
      gender: "female",
    },
    {
      id: "8",
      firstname: "Amit",
      lastname: "gupta",
      age: "21",
      gender: "male",
    },
    {
      id: "9",
      firstname: "Sumit",
      lastname: "sharma",
      age: "22",
      gender: "male",
    },
    {
      id: "10",
      firstname: "karan",
      lastname: "verma",
      age: "21",
      gender: "male",
    },
  ],
};

const userReducer = (state = userState, { type, payload }) => {
  switch (type) {
    case EDIT:
      return {
        ...state,
        rows: [
          ...state.rows,
          ...state.rows.filter((obj) => {
            if (obj.id === payload.id) {
              obj.firstname = payload.firstname;
              obj.lastname = payload.lastname;
              obj.age = payload.age;
              obj.gender = payload.gender;
            }
          }),
        ],
      };
    case DELETE:
      return {
        ...state,
        rows: state.rows.filter((obj) => {
          return obj.id !== payload;
        }),
      };
    default:
      return state;
  }
};

export default userReducer;
