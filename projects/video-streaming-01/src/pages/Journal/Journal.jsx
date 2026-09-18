import { useState } from "react";
import { journal } from "../../data/journal";
import { formatDateLong } from "../../utils/format";
import "./Journal.scss";

export default function Journal() {
  const [openId, setOpenId] = useState(journal[0]?.id || null);

  return (
    <section className="section journal-page">
      <div className="container">
        <span className="eyebrow">Journal</span>
        <h1 className="journal-page__heading">Notes from behind the screen</h1>
        <p className="journal-page__desc">
          Editorial pieces on craft, process and the people who make the titles on Aperture.
        </p>

        <div className="journal-page__list">
          {journal.map((post) => {
            const open = openId === post.id;
            return (
              <article className={`journal-post ${open ? "is-open" : ""}`} key={post.id}>
                <button
                  type="button"
                  className="journal-post__toggle"
                  aria-expanded={open}
                  aria-controls={`journal-body-${post.id}`}
                  onClick={() => setOpenId(open ? null : post.id)}
                >
                  <img src={post.image.src} alt={post.image.alt} loading="lazy" />
                  <div className="journal-post__summary">
                    <span className="journal-post__date">{formatDateLong(post.date)}</span>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                </button>

                {open && (
                  <div className="journal-post__body" id={`journal-body-${post.id}`}>
                    <p>{post.body}</p>
                    <span className="journal-post__author">— {post.author}</span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
