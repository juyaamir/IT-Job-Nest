

const daysDifference = (postedDate:string) => {
    const postedDateInMs = new Date(postedDate).getTime();
    const currentDateInMs = new Date().getTime();
    const differenceInMs =  currentDateInMs - postedDateInMs;
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));


  return differenceInDays

}

export default daysDifference