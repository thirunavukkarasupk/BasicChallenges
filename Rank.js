const markSheets=[
          
  {
      student: 'Ram',
      rollNo: 16,
      tamil: 60,
      english: 97,
      science: 100,
      maths: 34,
      social: 76,
      
  },
  {
    student: 'sri',
    rollNo: 18,
    tamil: 60,
    english: 90,
    science: 66,
    maths: 93,
    social: 46,
},
  {
    student: 'Sriram',
    rollNo: 11,
    tamil: 80,
    english: 90,
    science: 86,
    maths: 97,
    social: 76,
  },
  
  {
      student: 'mani',
      rollNo: 20,
      tamil: 40,
      english: 70,
      science: 86,
      maths: 73,
      social: 86,
  },
];


const getRank = (markSheets) => {
let rank=0;
const result=markSheets.map(markSheet=>
 ({
  ...markSheet,
  rank: markSheet.result==="PASS"
        ? ++rank
        : "-"
 }))
  return result
}
const getCounts = (markSheets) => {
let pass=0,fail=0;
markSheets.map(markSheet=>markSheet.result==="PASS"?++pass:++fail);
console.table({"NO.OF STUDENTS PASSED":pass,"NO.OF STUDENTS FAILED":fail});
}

const passOrFail = (markSheet) => markSheet.tamil<35 || markSheet.english<35 ||  markSheet.science<35 || markSheet.maths<35 || markSheet.social<35 ? "FAIL" : "PASS";
const processMarkSheet = (markSheet) => {
markSheet.result=passOrFail(markSheet);
markSheet.total=markSheet.tamil+markSheet.english+markSheet.science+markSheet.maths+markSheet.social;

};
const processMarkSheets = (markSheets)=> {
markSheets.map(processMarkSheet);
console.table(getRank(markSheets.sort((a,b)=>b.total-a.total)));
getCounts(markSheets);
};
processMarkSheets(markSheets);
