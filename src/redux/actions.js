

export const loadCollegesStart = () => ({
    type : 'LOAD_COLLEGES_START',
})

export const loadCollegesSuccess = (colleges) => ({
    type : 'LOAD_COLLEGES_SUCCESS',
    payload : colleges,
})

export const loadCollegesFail = (error) => ({
    type : 'LOAD_COLLEGES_FAIL',
    payload : error,
})

export const addUser = (users) => ({
    type : 'ADD_USER',
    payload : users,
})

export const deleteUser = (id) => ({
    type : 'DELETE_USER',
    payload : id,
})