

const initiale = {
    students: [],
    student: "",
    isLoader: false

}

const studentreducer = (state = initiale, action) => {

    switch (action.type) {

        case "IS_LOADING":
            return {
                ...state,
                isLoader: true,
            };

        case 'ADD_STUDENT':
            return {
                ...state,
                students: action.payload,
                isLoader: false,
            }

        case 'ALL_STUDENT':
            return {
                ...state,
                students: action.payload
            }

        case "SINGLE_DATA":
            return {
                ...state,
                student: action.payload
            }
            case "DELETE_STUDENT":


            return {
      
              students: state.students.filter((val) => val.id  !== action.payload ),
      
            };

        case "UPDATE_STUDENT":
            const update = state.students.map((val) =>
                val.id === action.payload.id ? action.payload : val
            );

            return {
                ...state,
                students: update,
            };


        default:
            return state
    }


}

export default studentreducer
