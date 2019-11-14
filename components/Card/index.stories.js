import React from 'react'

export default {
  title: 'Card'
}

export const withText = () => <div>text</div>

export const withEmoji = () => (
  <div><span role="img" aria-label="so cool">😀 😎 👍 💯</span></div>
);
