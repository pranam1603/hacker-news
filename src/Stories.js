import React from 'react';
import { useGlobalContext } from './context';

const Stories = () => {

  const { isLoading, hits, removeStory } = useGlobalContext()
  if (isLoading) {
    return <div className="loading"></div>
  }

  return <section className="stories">
    {
      hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        console.log(objectID, title, num_comments, url, points, author);
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} by <span>{author}</span> | {num_comments} comments
            </p>
            <div>
              <a href={url} className="read-link" rel="noopener noreferrer" target="_blank">
                read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(objectID)}>remove</button>
            </div>
          </article>
        )
      })
    }
  </section>

}

export default Stories