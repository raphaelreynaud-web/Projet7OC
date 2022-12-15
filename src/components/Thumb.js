export default function Thumbnail({name, url, id}){
    return <a href={"/logement/"+id} className="thumbnail">
        <img src={url} alt={name} />
{       <p>{name}</p>}
    </a>
}