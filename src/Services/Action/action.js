import axios from "axios"
import { base_api } from "../../../Base_API/Base_API"
import app from "../MyFireBase/myfirebase";
import { getAuth } from "firebase/auth";



const auth = getAuth(app);

export const AddStudent = (data) => {

 
    return{
        type : 'ADD_STUDENT',
        payload : data
    }
    
}
export const deleteStudent = (data) => {
  return {
    type: "DELETE_STUDENT",
    payload: data,
  };
};

export const getData = (data) => {

 
    return{
        type : 'ALL_STUDENT',
        payload : data
    }
    
}
export const updateStudent = (data) => {
  return {
    type: "UPDATE_STUDENT",
    payload: data,
  };
};

export const getSingleData = (data) => {

  console.log(data,"Single");
  return {
    type: "SINGLE_DATA",
    payload: data,
  };
}



export const loading = () => {
    return {
      type: "IS_LOADING",
    };
  };

export const addStudentasync = (data) => {
    return  dispatch => {
      dispatch(loading());
      axios.post(base_api + "/students", data).then((res) => {
          dispatch(getAllAsyncData(res.data));
          console.log(res.data,"AdDDDDDDDDDD");
        }).catch((ere) => {
          console.log(ere, "this is a add student error");
        });
    };
  };

  export const getAllAsyncData = () => {
    return (dispatch) => {
      dispatch(loading());
      axios.get(base_api + "/students").then((res) => {
          // console.log(res, "action res data for axios");
          dispatch(getData(res.data));
        }).catch((ere) => {
          console.log(ere);
        });
    };
  };
  export const getsinglestudentAsyncData = (id) => {
    return (dispatch) => {
      dispatch(loading());
      axios.get(base_api +`/students/${id}`).then((res) => {
          console.log(res.data, "action res data for axios");
          dispatch(getSingleData(res.data));
        }).catch((ere) => {
          console.log(ere);
        });
    };
  };
  export const updatestudentasync = (data, id) => {
    return dispatch => {
      dispatch(loading());
    axios.put(base_api + `/students/${id}`, data)
        .then((res) => {
console.log(res.data,"update data");
          dispatch(updateStudent(res.data));
        })
        .catch((ere) => {
          console.log(ere, "this is a add student error");
        });
    }
  };

  export const deletestudentAsyncData = (id) => {
    return dispatch => {
      dispatch(loading());
      axios.delete(base_api + `/students/${id}`)
        .then((res) => {
          dispatch(deleteStudent(id));
        })
        .catch((ere) => {
          console.log(ere);
        });
    };
  };




