import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ViewPost() {
  const [text, setText] = useState(undefined);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:7777/posts`)
      .then((data) => data.json())
      .then((data) => {
        let content = data.find((item) => {
          return item.id === +id;
        });
        setText(content.content);
      });
  }, [id]);

  let deletePost = () => {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  let editPost = () => {
    navigate(`/posts/${id}/edit`)
  }

  return (
    <>
      <div className="post">
        <div className="post-author">
          <img
            className="post-avatar"
            src=""
            alt="img"
          />
          <p className="post-author-name">Имя</p>
        </div>
        <div className="post-main">
          <div className="post-content">
            <p className="post-text">{text}</p>
          </div>
          <div className="post-footer">
            <div className="post-react-buttons">
              <button className="post-edit-button" onClick={editPost}>
                Редактировать
              </button>
              <button className="post-delete-button" onClick={deletePost}>
                Удалить
              </button>
            </div>
            <textarea
              className="comment-textarea"
              placeholder="Напишите комментарий..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}