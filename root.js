const batches =[]


//tham khảo về cách tìm phần tử có ngày nhỏ nhất trong array 

let initBatch =  batches.reduce((final,finalCurrent,i)=>{
    let dateB = new Date(final?.expirationDate),
        dateA = new Date(finalCurrent.expirationDate)
        return (dateB > dateA || i===0) ? finalCurrent: final 
  },{}) 