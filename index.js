class Driver{
constructor(name,startDate){
  this.name=name;
  // date should be formated  yy:mm:dd
  this.startDate=new Date(startDate);
}
 yearsExperienceFromBeginningOf(year){
  let yearD = new Date(year + "")
  return yearD.getFullYear()-this.startDate.getFullYear()
}
}
class Route{
  constructor(horizontal,vertical){
    this.horizontal=horizontal
    this.vertical=vertical
}
blocksTravelled(horizontal,vertical){
  
}
  
}