import React from "react";

function GetOutfit(props) {
    const outfits = {
        hot: [
            "../../public/images/shorts.png",
            "../../public/images/whitetshirt.png",
            "../../public/images/dress.png"
        ],
        warm: [
            "../../public/images/greytshirt.png",
            "../../public/images/jeans.png",
            "../../public/images/dress.png",
            "../../public/images/sweatshirt.png",
            "../../public/images/shorts.png"
        ],
        chilly: [
            "../../public/images/whitetshirt.png",
            "../../public/images/sweatpants.png",
            "../../public/images/sweatshirt.png",
            "../../publicimages/blackjacket.png",
            "../../public/images/dress.png",
            "../../public/images/jeans.png"
        ],
        cold: [
            "../../public/images/greytshirt.png",
            "../../public/images/jeans.png",
            "../../public/images/coat.png",
            "../../public/images/scarf.png",
            "../../public/images/blackjacket.png"
        ],
        wintry: ["../../public/images/freezing.png"]
    };

    const condition = props.outfit;
    const myOutfit = outfits[condition];

    console.log("condition is", condition);
    console.log("myoutfit is", myOutfit);

    if (myOutfit === undefined) {
        return (
            <>
                <h1>Loading Clothing Images</h1>
            </>
        );
    } else {
        return (
            <>
                <ul>
                    {myOutfit.map((item, id) => {
                        return <img src={item} />;
                    })}
                </ul>
            </>
        );
    }
    
}

export default GetOutfit;