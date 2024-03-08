
/*eslint-disable*/
import { useState } from "react";
import './App.scss';

function Remind() {
  // let [글제목, 글제목변경] = useState(['글제목입니다1','글제목입니다2','글제목입니다3']);
  // let [좋아요, 좋아요변경] = useState([0,1,99]);
  // let [팝업, 팝업변경] = useState(false);
  return (
    <>
      <div className="wrap">
        <div className="black-nav">
          <h3>ReactBlog</h3>
        </div>
          {/* 3개모두다바꿔보기 */}
        {/* <div className="btn-wrap">
          <button type="button" onClick={() => {
            let 글제목복사 = [...글제목];
            글제목복사 = ['변경1','변경2','변경3'];
            글제목변경(글제목복사);
          }}>글제목변경</button>
        </div> */}
        {/* <div className="list">
          <h4>{글제목[0]}</h4>
          <p>YYYY.MM.DD 발행</p>
        </div> */}
        {/* {repeatTitle(글제목)} */}

        {/* title 반복문으로 돌리기 */}
        {/* {
          글제목.map(function(item,idx) {
            return (
              <div className="list" key={item[idx]}>
                <h4>
                  <span onClick={() => {
                    팝업변경(!팝업);
                  }}>{글제목[idx]}</span>
                  <span onClick={()=> {
                    let 좋아요복사 = [...좋아요];
                    좋아요복사[idx] = 좋아요복사[idx] + 1;
                    좋아요변경(좋아요복사);
                  }}>💜</span>
                  {좋아요[idx]}
                </h4>
                <p>YYYY.MM.DD 발행</p>
              </div>
            )
          })
        } */}
        <타이틀뿌리기></타이틀뿌리기>
        
      </div>
        {/* 팝업 */}
        {
          // 팝업 == true ? <팝업나오기 글제목가져오기={글제목}></팝업나오기> : null
        }
    </>
  )

  // 글제목 반복문으로 돌리기
//   function repeatTitle(_title) {
//     let arr = [];
//     for(let i = 0; i < _title.length; i++) {
//       arr.push(
//         <div className="list" key={i}>
//           <h4>{_title[i]}</h4>
//           <p>YYYY.MM.DD 발행</p>
//         </div>
//       )
//     }
//     return arr;
//   }
} // END

const 타이틀뿌리기 = () => {
  let [글제목, 글제목변경] = useState(['다다다다_init','나나나나_init','가가가가_init']);
  let [좋아요, 좋아요변경] = useState([0,1,99]);
  let [팝업, 팝업변경] = useState(false);
  return (
    <>
      <div className="btn-wrap">
        <button type="button" onClick={() => {
          let 글제목복사 = [...글제목];
          글제목복사 = ['나나나나나','다다다다','가가가가'];
          글제목변경(글제목복사);
        }}>글제목변경</button>
        <button type="button" onClick={() => {
          let 글제목순서 = [...글제목];
          글제목순서 = 글제목순서.sort();
          글제목변경(글제목순서);
        }}>
          글순서변경</button>
      </div>
      {
        글제목.map(function(item,idx) {
          return (
            <div className="list" key={item[idx]}>
              <h4>
                <span onClick={() => {
                  팝업변경(!팝업);
                  console.log(팝업)
                }}>{글제목[idx]}</span>
                <span onClick={()=> {
                  let 좋아요복사 = [...좋아요];
                  좋아요복사[idx] = 좋아요복사[idx] + 1;
                  좋아요변경(좋아요복사);
                }}>💜</span>
                {좋아요[idx]}
              </h4>
              <p>YYYY.MM.DD 발행</p>
            </div>
          )
        })
      }
      {
        팝업 == true ? <팝업나오기 팝업닫기={팝업변경} 타이틀가져오기={글제목}></팝업나오기> : null
      }
    </>
  )
}

// 팝업 컴포넌트 만들기
const 팝업나오기 = (props) => {
  let {팝업닫기} = props;
  let 타이틀가져오기 = props.글제목;
  console.log(타이틀가져오기)
  return (
    <div className="popup">
      <div className="dim"></div>
      <div className="pop-inner">
        {/* <h4>{타이틀가져오기()}</h4> */}
        <div className="cont">
          <p>내용입니다.</p>
        </div>
        <button type="button" onClick={() => {
          팝업닫기(false);
        }}>닫기</button>
      </div>
    </div>
  )
}

export default Remind;