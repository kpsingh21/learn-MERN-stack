import getImageUrl from './util'

function Avatar({ person,size}){
    return(
        <img
         src={getImageUrl(person)}
         alt={person.name}
         width={size}
         height={size}
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