import react, {useState, useEffect} from 'react';


function ResultCard(props) {

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems: 'center',  height:500, width:500, margin: 10, backgroundColor: '#f7f7f7', border: '1px black solid'}} >
            <h2 style={{fontSize: '2em', fontWeight:'bold'}}>{props.name}</h2>
            <img src={props.img} style={{width: 'auto', height: 'auto', maxHeight: '50%', maxWidth: '50%'}}></img>
            <div>
                <ul>{props.ing1}</ul>
                <ul>{props.ing2}</ul>
                <ul>{props.ing3}</ul>
                <ul>{props.ing4}</ul>
            </div>
            

        </div>
    )
}

export default ResultCard;