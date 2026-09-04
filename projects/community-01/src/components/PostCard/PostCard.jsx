import { Heart, MessageCircle } from 'lucide-react'
import { images } from '../../data/images.js'
import './PostCard.scss'

export default function PostCard({ author, avatar, community, title, excerpt, tag, likes, comments, time }) {
  return (
    <article className="post-card">
      <div className="post-card__head">
        <img src={images[avatar]} alt="" className="post-card__avatar" loading="lazy" />
        <div className="post-card__meta">
          <span className="post-card__author">{author}</span>
          <span className="post-card__sub">
            {community} · {time}
          </span>
        </div>
        <span className="post-card__tag">{tag}</span>
      </div>

      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__excerpt">{excerpt}</p>

      <div className="post-card__footer">
        <span className="post-card__stat">
          <Heart size={15} strokeWidth={2} /> {likes}
        </span>
        <span className="post-card__stat">
          <MessageCircle size={15} strokeWidth={2} /> {comments}
        </span>
      </div>
    </article>
  )
}
