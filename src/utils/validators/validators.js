 export const required = value =>{
    if(value) return undefined;
    return 'Field is Required'
}
export const maxLengthCreator =maxLength => (value)=>{
  if(value.length > maxLength ) return `Max length is ${maxLength} symbols`;

  return undefined;
}

export const minLengthCreator =minLength => (value)=>{
    if(value.length < minLength ) return `Minm length is ${minLength} symbols`;
  
    return undefined;
  }