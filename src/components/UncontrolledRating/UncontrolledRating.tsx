import React, {useState} from "react";

export function UncontrolledRating() {
    let [value, setValue] = useState(0);

    const addStarCallback = () => {
        alert(1);
    }

    return (
            <div>
                <Star addStarCallback={addStarCallback} selected={value > 0}/><button onClick={() => setValue(1)}>1</button>
                <Star addStarCallback={addStarCallback} selected={value > 1}/><button onClick={() => setValue(2)}>2</button>
                <Star addStarCallback={addStarCallback} selected={value > 2}/><button onClick={() => setValue(3)}>3</button>
                <Star addStarCallback={addStarCallback} selected={value > 3}/><button onClick={() => setValue(4)}>4</button>
                <Star addStarCallback={addStarCallback} selected={value > 4}/><button onClick={() => setValue(5)}>5</button>
            </div>
    )
}

type StarPropsType = {
    selected: boolean
    addStarCallback: () => void
}
function Star(props: StarPropsType) {



    return (
        props.selected === true ? <span onClick={props.addStarCallback}><b>star</b></span> : <span onClick={ props.addStarCallback}>star</span>
    )
}
