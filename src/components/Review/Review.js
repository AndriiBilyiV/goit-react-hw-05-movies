export const Review = ({data}) => {
    return (
        <>
            {data.length ?
            (<ul>
                {
                    data.map((review) => {
                        return (
                            <li key={review.id}><h3>Author:{review.author}</h3><p>{review.content}</p></li>
                      )
                  })  
               } 
                </ul>)
                : <p>There is no reviews yet</p>
        }
            
        </>
    )
}