import React, { useEffect, useState } from 'react'

const useDesignationQuery = (url) => {

    const [desigList, setdesigList] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then((res) =>  {
          // handle success
    console.log({res});
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
      
    },[])
  return {
    desigList
  }
}

export default useDesignationQuery
