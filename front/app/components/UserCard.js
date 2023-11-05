import Image from "next/image";
import Link from "next/link";

export function UserCard(props) {
    const fileImage = (!props.model3d.file_url || props.model3d.file_url == "" )
    ? 'http://via.placeholder.com/500x500' : props.model3d.file_url
    return (
        <div className="card-contact">
            <div className="tx-center">
                <Image loader={() => fileImage} src={fileImage} className="card-img" alt="" 
                height={120} width={120} style={{objectFit: "cover"}} unoptimized={true}/>
                <h5 className="mg-t-10 mg-b-5">
                    <Link href={`/model3ds/${props.model3d.id}`} className="contact-name">
                        {props.model3d.name}
                    </Link>
                </h5>
                <p>{props.model3d.description ?? ""}</p>
                <Link href={`/model3ds/${props.model3d.id}`} className="btn btn-primary rounded d-block">
                    Voir le model
                </Link>
            </div>
        </div>
    )
}