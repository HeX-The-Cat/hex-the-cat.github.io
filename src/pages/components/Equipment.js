import dangerouslySetInnerHTML from "react";

const Equipment = ({gear, picture, text, index}) => {
    return (
        <div className=" flex justify-center p-1">
            <div className="">
                <h1 className=" flex justify-center">{gear}</h1>
                <div className=" flex justify-center items-center">
                    <div className=" w-1/2 flex justify-center items-center">
                        <img className=" GearImage" src={require('../img/' + picture)}/>
                    </div>
                    
                    <div className=" w-1/2">
                        <div dangerouslySetInnerHTML={{__html: text}} className="text-white text-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipment;