export const addUser = (user) => ({ type: 'ADD_USER', payload: user });
export const updateUser = (user) => ({ type: 'UPDATE_USER', payload: user });
export const deleteUser = (id) => ({ type: 'DELETE_USER', payload: id });

export const addPost = (post) => ({ type: 'ADD_POST', payload: post });
export const updatePost = (post) => ({ type: 'UPDATE_POST', payload: post });
export const deletePost = (id) => ({ type: 'DELETE_POST', payload: id });

export const addTache = (tache) => ({ type: 'ADD_TACHE', payload: tache });
export const updateTache = (tache) => ({ type: 'UPDATE_TACHE', payload: tache });
export const deleteTache = (id) => ({ type: 'DELETE_TACHE', payload: id });
