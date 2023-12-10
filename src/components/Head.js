import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, apiUrl } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion,setShowSuggestion]= useState(false);

  useEffect(() => {
    //  console.log(searchQuery);

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("APICall -" + searchQuery);
    const data = await fetch(
      "https://corsproxy.io/?" + YOUTUBE_SEARCH_API + searchQuery
    );
    const json = await data.json();
    // console.log(json[1])
    setSuggestion(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-5 m-2 shadow-lg">
      <div className="flex col-span-1 pt-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-14 mx-2 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <a>
          <img
            className="h-14"
            alt="youtube image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/wcH/lpb/0tL/zMz/lJT/9fX/8PD/kJD/xMT/3t7/4eH/srL/mJj/+fn/qKj/W1v/i4v/cHD/JSX/trb/z8//vLz/7Oz/2dn/o6P/n5//m5v/5ub/e3v/ODj/T0//Pj7/UFD/XFz/LCz/Zmb/hIT/GRn/fX3/RET/ra3/ERH/MDD/Y2PciEoRAAAEPElEQVR4nO2ciVaqUBSGuQgOCOIEzqamltp9/9e7cStzIGux/805tv7vAVp8q4I9Ow4hhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhMS1+ixsjjzfD9xBEkX79ngynbZalUq1kVGtVFqt6WQ8bu+jJBkEvp+OmuGsXotNP3k+9dALknarO+89Lh76hz9CDv2HRaf33Gi1k8AL6wbFhmlU7a3WUqHvWXfmlSgdlmuXNhb6Zpcst4NaSX7T8u0+WAxK8Gub88s4uMp+taVZwVc6qm/ckWm9/4R6gp5pt3dGWoKhabMjMx3B2LTXCTqGj6a1TthoCAamrc7wFQyfTEud8YIXdE07XYD/Ja5MK10A/0+smTa6Am04MC10RQo23JoWuqIFNlyaFrqiAzY07ZMDVtCekPQTbGHDtq9hBvaLODGtk0Mbajg3rZPDM9TQtogmYwU1FBd6FXiCGpq2yQUpWDctkwuy5N80LZNLE2jom5bJBflBTCTPoZaWJEDDseA5XMfpwqTOGAMNG4LnyBoNww5M64Qu0PBZ8BxvrZS0DxM7MgcabgTP8dEswjet/gINJUHbZztM8peQxwJo+CB4jpOG3wzbOkbWTCXV4LOWZgANcIGGkse4aNoiM007DZ24hxK01fA1yl1aZyjqHOaNFoACOdz0iSh5yh+eqCIMcdW2Id7QqUuiiHdwze6ZgqHjeC9SQ9xQhigBvjHiEwkNcTMZojGam0NMsrzKgxmK5mhuj2mJ8iqcYapn6Dh+8bwK10IUlWm+H7UrnFfhCjXKhk5cMK8KYIaiUZofjUsWy6vuybBYKeieDItFOHdkWCn2o3GGym+awpkG7l2q+j0UZIu476FiTFOTZPz3ELXJNhtwkbdWbuEKK2+49ppOfhjuZH62Z8AxYLwDV8VQqNNI+nVHcG1ueK0twIxUA7dnsIaw9gVOEGuIa0HZaYhsIwINJd+tM0NByeKaPtAQ1D8Et/OXQEPJq+HTED0rjhzdQ/Tx9zCzD5ArF5L4483QU9j6Rg6YSkrTmWFdZe+tCjS0cyYKOQZt51wbcnXdztlE5F6QnfOlyJ1uO2eEoUckTMvkghS00hAZlsrCNi2wy2s27sxsoYYGL7Z8CXbv6ffvrv3+/UMbX6ZYQVGWrwN2dc3GXW5k7pRh3z4++mzE77+pYN0W6SPc0LYvosJVM7vu0xzwgpbdGFI5vqeyf1aQnYagVbe+lK5+2hOcom/THLHl5p7iBUw7am4al8yOxObLGX2lk4JHJOVvBFNlv4x9CceDv6JS0rnosL0xEOEsGmqv0Hya7ni72ZVw9GS9MnAM+pR42PTdaFzdzjed3Vr+u3076D3vmj/ofYO4NpyFTS/1/eNN9sn1TfZJdpM9SgZu4Pue1UfZCSGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGl8g/A/VsMI7KqJAAAAABJRU5ErkJggg=="
          />
        </a>
      </div>
      <div className="col-span-10 pt-3 px-10">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
        {showSuggestion&&<div className="fixed bg-white px-2 py-2 w-[40rem] shadow-lg rounded border-gray-100 ">
          <ul>
            {suggestion.map((s) => (
              <li key={s} className="shadow-sm px-3 py-2 hover:bg-gray-100 ">
                {s}
              </li>
            ))}
          </ul>
        </div>}
      </div>

      <div className="col-span-1">
        <img
          className="h-12"
          alt="user"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAY1BMVEX///8AAAD6+vrV1dU3Nzfc3Nzw8PDNzc3FxcXS0tKurq7l5eW7u7uGhoZYWFg6OjpPT0+cnJxsbGwbGxuoqKhhYWE/Pz8lJSUyMjK1tbWOjo5HR0cQEBAtLS10dHQWFhZ9fX0MZjZhAAAEu0lEQVRoge1b15brIAw0JO4lzU51sv7/r9z1JrnB1KFkfe45mXcYbIQ0EiKKPvjgg/8PNCkXaZZl6aJM6N8y523dLQmLZVe3+V+sIsnqPVFhX2fJW8mr7qAkv+PQVe9aQlwfDeR3HOv4DexVA5Hf0VSB2U87C/YRu1M4clqtLNlHrKpA52GxdmAfsV4EYKdnR/YRZ+9fkC/NLBoscz/6jRf7iI0He7L1pidk6+yP4ksAekIuju4oDcI+InWhPwWjJ8TBGRUB6Qkp5qW3XkDIn3+H1RbkwekJsfBEcf8G/h4+hkmYc8/jgjqiEF5Phi1G7+/zVYBiwTts7wnABqlfwNVjadYDPnLDjLOJfvFWekIMkoziWu96K9KfxI8maXG7wqPW+h2o0Hm2GTsRzeAzq88MQKF9E31ZfMOGrnT0YNiRfwP473SBCMpy1io/mkDGs1PTQ1+wVVsQhaxAbQFIitnpDJh2wAyNanQMDL7qzw9FTqIqENceY22+oZYPTYDygjmCAdHzKDdgwPoACYGIF7kFAraDqFhAOXfShZtKS4R8IQoq+TLOc5DNk5nXrTAcDoAZZ27DsDwOyBtlH6IuK/4DVs2g5on2TqOWEH0UAQpO/BJAdoL6GdHvohBtzYOM4u0BQEK2wiDA/NBSDuACRQMEvE9AftEDAUYT8P8LpgyYf0j7Ew5AAozRSkcGiIjlPXAJjAnnfwgpuUFQ3hPM/4p5EDQoWPwRPwWIfoT0UPyFijd8BIT4Q+kPZ/6L2QIpVjzi+cFibxD9OYLffzTvN12puM4Dnf8fHA35B3ZFKJ5/xP/9otHmX/AlIX+SIKf1i5uGH6wBEIkrxcteF/7fPVHidVNRyiGZ6wM7Rf3B4o5UjP+Q13zCo/5yh+jJAf03WcHUgWRW7DL9Z1127W9FWiY0KdPiZl2vF/UvfgBCQHKIgfwnGCT5j50BekImJLAISNbDsJUftF03DGD5Vpb/Avk/WT0EwGLgLa4fHhGlANSnNP83e6Br8TKbpG1e6z007WtGWhhrYNL6h7H+M3CrLvNiUw/1psg5h5wMhpnk/lNf/7raXCKn2l+gqH9pT4Cm6iqDthKrktGa2qF9F4NGhylrmEr1YH19HWl0sLL+q7RAp/4BpaTV3IDIHYtrD4s8pGnq//L7D5mzwiB1qdqLeInzEkM1Domo0CfxogWgRQ85xFKI/v5LuP9be9FHkTCfwY/w+YtvMyOfVxhb0qZ/zL+PcLqj5t2c3H+rXQUO1qkB99/sqd2FaOSMGacCeZKX5+7dj/4L2UuqgFGEiV1unpcF44XR+iF7heTZP8juJtz/MgnEflvAemALY2JDl0vsfYKNwVZbyQYiXcKvB5sUWrbgsStvVAm/HiV78r0a8A4ubrA6+NBzWsC6iXTauurUjJ1PcpyNjQCmE/XZOx7iaf8rm/0Y2KcZkGv/q9D/uz9B9efTNJN37/+NBBV/NT4tiGsu9fHpf44k/d+XjXo38w1fgfPt/5b2v/ddkZZTY6BlWnRiFci//z1S9P9f981wbk9VVZ3a89DsZQlnkP7/aPb3DyNmff/xi3nfv4yY9/3PiHnfP92XMOf7rwfmfP/GrGK2938ffPBBGHwDC1s8lJFOq84AAAAASUVORK5CYII="
        />
      </div>
    </div>
  );
};

export default Head;
