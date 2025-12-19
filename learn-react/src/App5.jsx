import getImageUrl from './util'

function Avatar(props){
    return(
        <img
         src={getImageUrl(props.person)}
         alt={props.person.name}
         width={props.size}
         height={props.size}
        />
    )
}

export default function Profile(){
    return (
        <div>
           <Avatar
             size={150}
             person={{
                name:'Lin Lanyin',
                imageId: '1bX5QH6'
             }}
           />
             <Avatar
                size={80}
                person={{
                name: 'Aklilu Lemma', 
                imageId: 'OKS67lh'
                }}
            />
        </div>
    )
}