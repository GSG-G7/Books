module.exports= res => res.items?res.items.slice(0,10).map((value)=>{
            return {title: value.volumeInfo.title,
                   authors: (value.volumeInfo.authors).toString(),
                   description: value.volumeInfo.description,
                   averageRating: value.volumeInfo.averageRating,
                   image:value.volumeInfo.imageLinks.thumbnail,
                   category: value.volumeInfo.categories                       
                  } } ):{}