/*eslint-disable*/
// lint 끄는 기능임
import { useState } from 'react'; // useState사용시 생성
import './App.scss';

function App() {
  let post = '강남 우동 맛집'; // 자료잠깐저장할 땐 변수 뿐만아니라 state
  
  // destruturing문법
  // let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']); // state쓰던 html은 자동으로 재렌더링됨.
  /* 글제목 : state에 보관했던 자료 나옴
   * 글제목변경(변경되는데이터) : state변경 도와주는 함수 */
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a) {
    // 1. array자료갯수만큼 함수안의 코드 실행해줌
    // 2. 함수의 파라미터는 array안에 있던 자료
    // 3. return에 적으면 array로 담아줌
    // return '담아줘' ['담아줘', '담아줘', '담아줘']
  })

  return (
    // return 안 HTML 짜는 공간
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={ ()=> {
        let copy = [...글제목];
        copy[0] = ['여자 코트 추천'];
        글제목변경(copy);
      } }>수정버튼</button>
      <button onClick={ ()=> {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      } }>가나다순정렬</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span>💙</span> { 좋아요 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } <span>💙</span> { 좋아요 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          <button onClick={ ()=> { setModal(!modal) } }>{ 글제목[2] }</button>
          <span>💙</span> { 좋아요 }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* 중괄호안에서는 for반복문을 쓰지 못한다. => map 사용 */}
      {
        // [1,2,3].map(function() {
          // return <div>안녕</div> [<div>안녕</div>,<div>안녕</div>,<div>안녕</div>]
          // 리액트는 array안에 html담아도 잘보여준다.
        // })
        글제목.map(function(a, i) {
          return (
          <div className="list" key={a}> {/* 반복문으로html생성하면 key={html마다다른숫자} 추가해야 됨 */}
            <h4>
              <button onClick={ ()=> { setModal(!modal); console.log(i) } }>{ 글제목[i] }</button>
              <span onClick={ ()=> {
                let copy = [...좋아요];
                copy[i] += 1;
                좋아요변경(copy);
              } }> 💙 </span>{ 좋아요[i] }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      {
        modal == true ? <Modal/> : null
      }

    </div>
  )
}


function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    // <div></div> 병렬태그 2개 안됨
  )
}

// 참고1
// return() 안에 병렬태그 2개이상쓰고 싶다면 <div></div> 또는 <></> 감싸주기
// 참고2
// <컴포넌트></<컴포넌트> 또는 <컴포넌트/>

export default App;