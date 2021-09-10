const str = `
    010-1111-2222.
    theabc@gmail.com
    https://www.omdbapi.com
    The quick brown fox jumps ove the lazy dog.
    abbcccdddd
    hfdp
    http://localhost:1234
    동해물과_백두산이
d`;

// // '' : 옵션이 없으면 가장 먼저 찾아진 것을 반환
// // g : 전체에서 검색 모든 the를 찾는다.
// // i : 전체에서 검색하여 대소문자 상관없이 the/The를 찾는다.
// // 1. 
// // const regexp = new RegExp('the', 'gi');

// // 2.
// const regexp = /the/gi;

// console.log(str.match(regexp));

// ===========================================
// 03. 메소드
// test : 일치 여부 반환 => 정규식.text(문자열)

// match : 일치하는 문자열의 배열 반환 => 정규식.match(정규식)

// replace : 일치하는 문자열을 대체하는 대체된 문자열 반환 => 문자열.replace(정규식, 대체문자)

// const regexp = /fox/gi;
// //console.log(regexp.test(str));

// // 원본 데이터는 바뀌지 않는다.
// console.log(str.replace(regexp,'TIGER'));

// // 변수를 const str에서 let str로 바꿔주고 아래와 같이 처리하면 원래의 데이터도 바꿀 수 있다.
// // str = str.replace(regexp,'TIGER'); 

// console.log(str);

// ===========================================
// 04. 플래그 옵션

// const regexp = /the/gi;
// console.log(str.match(/the/gi));

// "\" : 특수 기호를 문자로 해석하도록 
// $ : $ 앞에 있는 단어를 찾는다. 문장 단위.. 
// 위와 같은 문장은 여러 줄이기 때문에 m 옵션을 넣으면 각 문장마다 찾는다. 
// m : 각각의 줄을 하나의 문장으로 인식
// console.log(str.match(/\.$/gim));

// ===========================================
// 05. 패턴 (표현)

// console.log(
//     str.match(/d$/gm)    // 문장이 d로 끝나는지?
// );

// console.log(
//     str.match(/^t/gm)    // 문장이 t로 시작하는지?
// );

// console.log(
//     //str.match(/http/g)    
//     //str.match(/h..p/g)    // 첫글자 h, 끝글자 p 로 끝나는 단어?
//     //str.match(/fox|dog/g)   // fox 또는 dog를 찾는다
//     str.match(/https?/g)    // ? 앞의 글자는 있을 수도 , 없을 수도 있다는 의미
// );

// console.log(
//     //str.match(/d{2}/)    // d 가 2개 연속적으로 나타내는 것
//     //str.match(/d{2}/g)    // d 가 2개 연속적으로 나타내는 것을 전체에서
//     //str.match(/d{2,}/g)    // d 가 2개이상 연속적으로 나타내는 것을 전체에서
//     //str.match(/d{2,3}/g)    // d 가 2개이상 3개 이하
//     //str.match(/\w{2,3}/g)   // \w : 숫자 포함 영어 
//     str.match(/\b\w{2,3}\b/g)   // 
// );

// console.log(
//     //str.match(/[fox]/g)      // f or o or x
//     //str.match(/[0-9]{1,}/g)     // 숫자 1개 이상을 검색
//     str.match(/[가-힣]{1,}/g)   // 모든 한글
// );

// console.log(
//     //str.match(/\w/g)
//     //str.match(/\b/g)    // 글자 사이의 경게 
//     //str.match(/\bf\w{1,}\b/g)
//     //str.match(/\d{1,}/g)    
// );

// const h = `  the hello world  !

// `;
// console.log(
//     h.replace(/\s/g, '')
// );

console.log(
    //str.match(/.{1,}(?=@)/g)  // @를 기준으로 앞 부분
    str.match(/(?<=@).{1,}/g)   // @를 기준으로 뒷 부분
);