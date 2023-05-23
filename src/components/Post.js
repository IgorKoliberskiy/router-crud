import { Link } from "react-router-dom";

export default function Post(props) {
  if (props.data !== undefined) {
    return (
      <>
        <div className="post" >
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
              <p className="post-text">
                <Link to={`/posts/${props.id}`} className='post-link'>
                  {props.data.content}
                </Link>
              </p>
            </div>
            <div className="post-footer">
              <div className="post-react-buttons">
                <button className="post-like-button">Нравится</button>
                <button className="post-comment-button">Комментировать</button>
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
}