export class Education {
  constructor(program, school, city, start, end, info = []) {
   this.program = program;      
    this.school = school;  
    this.city = city;
    this.start = start;
    this.end = end;
    this.info = info;
  }
}