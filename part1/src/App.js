/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState([100, 20, 30]);
  let [modal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => {
        // 가나다순으로 변경
        let sort = [...글제목].sort();
        글제목변경(sort);
      } }>정렬버튼</button>
      <button onClick={() => {
        // 글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      } }>수정버튼</button>
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>
      {/* <div className="list">
        <h4 onClick={ () => { setModal(!modal) }}>{글제목[0]}<span onClick={() => { 좋아요변경(좋아요 + 1); } }>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}<span>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}<span>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* list 반복문으로 축약해보자 */}
      {
        글제목.map(function(a,i) {
          return (
            <div className='list'>
              <h4 onClick={ () => { setModal(!modal) } }>{ a }<span onClick={ () => {
                let copy = [...좋아요];
                copy[i] += 1;
                좋아요변경(copy)  
              } }>👍</span>{ 좋아요[i] }</h4>
              <p>2월 18일 발행</p>
            </div>
          )
        })
      }
      { modal == true ? <Modal></Modal> : null }
    </div>
    </>
  )
}

// 모달팝업 함수
// function Modal() {
//   return (
//     <div className="modal">
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//       <p>상세내용</p>
//       <p>상세내용</p>
//       <p>상세내용</p>
//     </div>
//   )
// }
let Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;