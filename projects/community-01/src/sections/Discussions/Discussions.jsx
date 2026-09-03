import PostCard from '../../components/PostCard/PostCard.jsx'
import { posts } from '../../data/posts.js'
import './Discussions.css'

export default function Discussions() {
  return (
    <section id="discussions" className="section discussions">
      <div className="container">
        <div className="section-head">
          <span className="section-head__eyebrow">Discussions</span>
          <h2 className="section-head__title">Conversations worth reading right now</h2>
        </div>

        <div className="discussions__grid">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
