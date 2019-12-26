import uuid from "uuid/v1";

export const BookListReducer = (state, action) => {
  switch (action.type) {
    case "create":
      return [
        {
          id: uuid(),
          data: {
            title: "",
            author: ""
          }
        },
        ...state
      ];

    case "update":
      //example call: {type: "update", id: "id", title: "the way of kings", author: "brandon sanderson"}
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          return [
            ...state.slice(0, i),
            { id: state[i].id, data: { ...state[i].data, ...action.data } },
            ...state.slice(i + 1)
          ];
        }
      }

    case "delete":
      //example call: {type: "delete", id: "id"}
      return state.filter(e => e.id !== action.id);

    default:
      return state;
  }
};
