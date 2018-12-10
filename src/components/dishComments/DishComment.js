/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import dishListServer from '../../data/DishListRated';

const ratingOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const INITIAL_STATE = {
  comment: '',
  rating: 0,
};

export default class DishComment extends Component {
  state = {
    comment: '',
    rating: 0,
  };

  updateCommentList = () => {
    const { id } = this.props;
    const { comment } = this.state;
    const selectedDish = dishListServer.find(dish => dish.id === id);
    if (comment.length < 0 || !comment) return;
    dishListServer[dishListServer.indexOf(selectedDish)].comments.push(comment);
  };

  updateRatingList = () => {
    const { id } = this.props;
    const { rating } = this.state;
    const selectedDish = dishListServer.find(dish => dish.id === id);
    dishListServer[dishListServer.indexOf(selectedDish)].rating.push(rating);
  };

  handleTextAreaChange = ({ target }) => {
    this.setState({
      comment: target.value,
    });
  };

  handleRatingSelect = ({ target }) => {
    this.setState({
      rating: Math.round(target.value),
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.updateCommentList();
    this.updateRatingList();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { id } = this.props;
    const { comment, rating } = this.state;
    const ratingOption = ratingOptions.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
    const selectedDish = dishListServer.find(dish => dish.id === id);
    const { name, image, description, comments } = selectedDish;
    const commentItem = comments.map(item => <li key={item}> {item} </li>);
    return (
      <section>
        <h2> {name} </h2>
        <p> {description}</p>
        <img src={image} alt={name} width="160px" height="auto" />
        <div className="comments_wrap">
          Comments:
          <ul> {commentItem} </ul>
        </div>
        <form>
          <textarea
            onChange={this.handleTextAreaChange}
            rows="10"
            cols="80"
            value={comment}
            placeholder="Leave Your comment..."
          />
          <label>
            Rate the dish
            <select
              name="rating"
              onChange={this.handleRatingSelect}
              value={rating}
            >
              {ratingOption}
            </select>
          </label>
          <button type="submit" onClick={this.handleFormSubmit}>
            Сохранить
          </button>
        </form>
      </section>
    );
  }
}
