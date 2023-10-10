export default function Imagens(){
    return (
        <>
            <img src="http://lorempixel.com.br/300/200/?1"
            className="img-fluid"/>
           
            <hr />
                <img src="http://lorempixel.com.br/300/200/?2"
                className="img-thumbnail"/>
            <hr />

            <figure>
                <img src="http://lorempixel.com.br/300/200/?3"
                className="rounded float-start img-fluid"
                />
                <img src="http://lorempixel.com.br/300/200/?4" alt=""
                 className="rounded float-end img-fluid" />
            </figure>
        </>
    )
}