import axios from "axios";
import routes from "../../routes";

const commentNum = document.querySelector("#jsCommentNumber");
const commentList = document.getElementById("jsCommentList");
const comment = document.querySelectorAll(".jsComment");

const decreaseNum = () => {
  commentNum.innerHTML = parseInt(commentNum.innerHTML, 10) - 1;
};

const deleteComment = (id, target) => {
  const span = target.parentElement;
  const li = span.parentElement;
  commentList.removeChild(li);
};

const handleClick = async event => {
  const { target } = event;
  const commentId = target.id;
  const response = await axios({
    url: routes.deleteComment(commentId),
    method: "POST",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    deleteComment(commentId, target);
    decreaseNum();
  }
};

// comment의 id 값을 순회하면서 id 값을 포함하고 있는
// button el을 받아온다.
const addEvent = () => {
  comment.forEach(el => {
    const delBtn = el.childNodes[1];
    delBtn.addEventListener("click", handleClick);
  });
};

function init() {
  addEvent();
}

if (comment) {
  init();
}
