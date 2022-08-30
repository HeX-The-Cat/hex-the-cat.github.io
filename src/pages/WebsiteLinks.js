import WebsiteLink from "./components/WebsiteLink";
import WebsiteJson from "./components/WebsiteLinks.json"



const Links = () => {
    return(
        <div>
            <h1 className=" flex justify-center"> This page has some links I use semi-commonly, generally related to games I play and sites I use.</h1>

            <div>
            {WebsiteJson.map((item, index) => {
                return(
                    <WebsiteLink 
                        index={item.index}
                        key={item.websitegroup + index}
                        websitegroup={item.websitegroup}
                        websitelinks={item.websitelinks}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default Links;


// 