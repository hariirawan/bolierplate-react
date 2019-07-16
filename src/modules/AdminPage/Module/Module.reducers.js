const initalState = {
  name: "Hari Irawan",
  data: [
    {
      name: "Hari Irawan",
      umur: 29,
      alamat: "Jerua, Desa Montong Beter"
    },
    {
      name: "Luqmanul Hakim",
      umur: 30,
      alamat: "Jakarta Barat"
    },
    {
      name: "Lehon",
      umur: 20,
      alamat: "Jakarta Selatan"
    },
    {
      name: "Lehon",
      umur: 20,
      alamat: "Jakarta Selatan"
    },
    {
      name: "Lehon",
      umur: 20,
      alamat: "Jakarta Selatan"
    }
  ]
};

export default function ModuleReducers(state = initalState, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
