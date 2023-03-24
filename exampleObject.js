let data = [
    { actionCodes :{
     NA : 4,
     QC : 6,
     NA : 4,
    },date : 
    "2022-04-14 T 09 "
 },
    { actionCodes :{
     NA : 4,
     CU : 3,
     NA : 4,
    },date : 
    "2022-04-14 T 09 "
 },
    { actionCodes :{
     NA : 4,
     QC : 4,
     CUU : 4,
    },date : 
    "2022-04-14 T 09 "
 },
    { actionCodes :{
     NA : 4,
     CU : 4,
     QCC : 4,
    },date : 
    "2022-04-14 T 09 "
 },
 ]


//result
// [
//   { NA: [ 4, 4, 4, 4 ] },
//   { QC: [ 6, 0, 4, 0 ] },
//   { CU: [ 0, 3, 0, 4 ] },
//   { CUU: [ 0, 0, 4, 0 ] },
//   { QCC: [ 0, 0, 0, 4 ] }
// ]