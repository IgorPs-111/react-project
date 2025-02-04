import {useReducer} from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  address: "",
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case "SET_NAME": {
      return {...DEFAULT_FORM_VALUE, name: payload};
    }
    case "SET_TEXT": {
      return {...state, text: payload};
    }
    case "SET_ADDRESS": {
      return {...state, address: payload};
    }
    default:
      return state;
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setName = (name) => {
    dispatch({type: "SET_NAME", payload: name})
  }
  const setText = (text) => {
    dispatch({type: "SET_TEXT", payload: text})
  }
  const setAddress = (address) => {
    dispatch({type: "SET_ADDRESS", payload: address})
  }

  return {form, setName, setText, setAddress}
}