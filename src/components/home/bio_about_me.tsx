import {useEffect, useState,} from "react";
import json from "../../../assets/info.json";
import React from "react";

 export default function BioAboutMe() {
    const bio = json.aboutMe;



    const [state, setState] = useState({
      expanded: false,
      paragraphLimit: 2
    });

    // useEffect(() => {
    //   toggleReadMore();
    // }
    // , []);



function toggleReadMore() {
  if (state.expanded) {
    state.expanded = false;
    state.paragraphLimit = 2;
  } else {
    state.expanded = true;
    state.paragraphLimit = bio.length;
  }
}

const onCleck = () => {

  toggleReadMore();
  setState({...state});
  
}


    return <div>
          {
    bio
      .slice(0, state.paragraphLimit)
      .map((paragraph, index) => (
        <p className="text-gray-900 dark:text-gray-100 my-2">{paragraph}</p>
      ))
  }

  {
    !state.expanded && bio.length > state.paragraphLimit && (
      <button onClick={onCleck} className="text-blue-500 hover:underline">Read More</button>
    )
  }

  {
    state.expanded && bio.length >= state.paragraphLimit && (
      <button onClick={onCleck} className="text-blue-500 hover:underline">Read Less</button>
    )
  }
    </div>
}