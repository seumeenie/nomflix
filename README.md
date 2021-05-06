Movie app clone Project

-memo-
Structuring : 적은 코드를 사용해서 간소화시킴(아래 예시 : 이름 저장)

const human = {
name: "Sumin",
lastName: "Lee",
nationality: "korean"
}

//기존

const name = human.name;
const lastName = human.lastName;

//이 방법은 비효율적. 두개의 variable을 선언하고 해당 object의 variable 이름과 내 variable의 이름이 같음 -> 같은 행동 반복중

//Structuring : 해당 Object를 Deconstruct함. **\***해당 Object에 있는 것들을 기반으로 새 Variable을 만듬
// { } : Object 안에 있는 Property들을 가져오는 것을 의미
// = human; 으로 그게 어떤 Object인지 알려줌

const { name, lastName, nationality: difName } = human;

//human이라는 object로 가서 name,lastName의 값을 새로운 variable인 name,lastName에 넣음.
//human Object로 가서 nationality라는 variable값을 가져오고 그 값을 difName에 넣음.

-> 두 가지 다 Sumin Lee korean이 잘 출력됨

-memo-
React로 작업할 때 Class에 대해 알아야 할 모든 것 : 매우 독립적인 class를 만들고 해당 class는 Human을 extends 하고 있음

class Human {
constructor(name, lastName){
this.name = name;
this.lastName = lastName;
}
}

위 코드의 의미:
누군가 새로운 Class를 생성한다면 네게 name,lastName에 해당하는 값을 전달할것, 그리고 뭘 주었던 지 간에 해당 Class의 name과 lastName에 집어 넣음
this : 해당 클래스를 참조한다는 뜻. 해당 클래스를 의미

class Baby extends Human {
cry() {
console.log("ahhhhh~~");
}
sayName(){
console.log(`My name is ${this.name}`)
}
//this.name의 name은 이 Class 안에 있음. extends Human을 했기 때문
}

Baby라는 Class를 가지고 싶다면
Baby는 Human에 속하므로 extends를 써 Human의 모든 것을 가지고 새로운 이 클래스만의 것을 추가함

const myBaby = new Baby("aa","bb");
(Baby에선 안 썼지만 Baby도 constructor를 가지고 있게됨)

console.log(myBaby.cry(), myBaby.sayName()); // ahhhhh~~ My name is aa 출력

sayName에서 Template Literals 사용
Template Literals 일부 : ``(backticks) console.log("My name is" + name)을 console.log(`My name is ${this.name}`)
로 씀 -> Template, Variable, String 들을 다루기 가장 좋은 방법

-memo-
React에서 많이 쓰이는 함수

map function : 함수를 실행하는 모든 배열의 아이템에 function을 실행하는 Method. 그리고 그 함수의 결과 값으로 새로운 배열을 만듬

filter function : 배열의 모든 요소들에 function을 실행해서 true를 return하는 요소로만 이루어진 배열을 만듬

foreach function : 새로운 배열을 원하지 않고 각각에 item에 대해서 어떤 시행만 하고 싶을 때 사용.(map,filter와는 다름. map,filter는 새로운 배열을 return함) 아무 작업이나 할 수 있음(범용성 up)

push function : 새로운 item을 배열에 추가하는 역할

include function : 해당하는 string이 배열에 존재하는 지 확인 할 수 있는 간단한 Method

etc : 데이터를 다루게 될 때 뭔가 조작을 하게 될 때, 여러 상황에서 문제가 생길 때, **\***mdn을 참조할 시 문제를 도울 수 있는 해답이 있을 수 있음
