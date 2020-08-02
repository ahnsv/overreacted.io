import React from 'react';
import profile from '../assets/profile.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profile}
          alt={`Dan Abramov`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          세상 모든 걸 리뷰하는{' '}
          <a href="https://blog.naver.com/ye_onny">여니의 블로그</a>. <br />
          <a href="https://smartstore.naver.com/yeonnneee">여니네 가게</a>에도
          놀러와주세요!
        </p>
      </div>
    );
  }
}

export default Bio;
