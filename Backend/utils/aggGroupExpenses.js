exports.getNetAmount = (lentList,borrowList)=>{
    const response = []

    // Add Lent Amount
    lentList.forEach(entry => {
        const id = entry._id.toString();
        response.push({
            id : id,
            netAmount : entry.lentAmount
        })
    })

    // Add borrowed amount
    borrowList.forEach(entry => {
        const id = entry._id.toString();
        // Check if the entry exists
        const index = response.findIndex(item => item.id === id);
        if(index >= 0){
            response[index].netAmount -= entry.borrowedAmount // updated amount if entry is already present
        } else {
            // Add new entry if record is not present
            response.push({
                id : id,
                netAmount : -entry.borrowedAmount
            })
        }            
    })

    return response
}