const initialState = {
  users: [],
  posts: [],
  commentaires: [],
  taches: [],
};

function nextId(liste) {
  return Math.max(0, ...liste.map((item) => item.id)) + 1;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_COMMENTAIRES':
      return { ...state, commentaires: action.payload };
    case 'SET_TACHES':
      return { ...state, taches: action.payload };

    case 'ADD_USER':
      return { ...state, users: [...state.users, { ...action.payload, id: nextId(state.users) }] };
    case 'UPDATE_USER':
      return { ...state, users: state.users.map((u) => (u.id === action.payload.id ? { ...u, ...action.payload } : u)) };
    case 'DELETE_USER':
      return { ...state, users: state.users.filter((u) => u.id !== action.payload) };

    case 'ADD_POST':
      return { ...state, posts: [...state.posts, { ...action.payload, id: nextId(state.posts) }] };
    case 'UPDATE_POST':
      return { ...state, posts: state.posts.map((p) => (p.id === action.payload.id ? { ...p, ...action.payload } : p)) };
    case 'DELETE_POST':
      return { ...state, posts: state.posts.filter((p) => p.id !== action.payload) };

    case 'ADD_TACHE':
      return { ...state, taches: [...state.taches, { ...action.payload, id: nextId(state.taches) }] };
    case 'UPDATE_TACHE':
      return { ...state, taches: state.taches.map((t) => (t.id === action.payload.id ? { ...t, ...action.payload } : t)) };
    case 'DELETE_TACHE':
      return { ...state, taches: state.taches.filter((t) => t.id !== action.payload) };

    default:
      return state;
  }
}
