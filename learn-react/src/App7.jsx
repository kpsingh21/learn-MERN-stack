function Item({name,isPacked}){
    return(
        <>
          <li>
            { isPacked ? ( <del>  { name + '✅' } </del> ): (name) }
          </li>
          <li>{name}</li>
</>
    )
}

export default function PackagingList(){

    return(
        <>
         <h2>Sally Ride's Packing List</h2>
         <Item name="item one" isPacked={true}/>
         <Item name="item two" isPacked={false}/>
         <Item name="item three" isPacked={true}/>
        </>
    );
}