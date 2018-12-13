import React, { Component } from 'react';
import styles from './DishComment.module.css';
import DishList from '../../data/DishList';

const v4 = require('uuid/v4');

const ratingOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DishListRated = DishList.map(dish => ({
  id: dish.id,
  name: dish.name,
  image: dish.image,
  description: dish.description,
  price: dish.price,
  ingredients: dish.ingredients,
  comments: [],
}));
let commentToSubmit = {};

const INITIAL_STATE = {
  commentText: '',
  commentRating: '-',
};

export default class DishComment extends Component {
  state = { ...INITIAL_STATE };

  updateCommentList = () => {
    const { commentText, commentRating } = this.state;
    if (commentText.length > 0 || commentRating > 0) {
      commentToSubmit.id = v4();
      commentToSubmit = { ...this.state };
      const { id } = this.props;

      DishListRated.find(dish => dish.id === id).comments.push(commentToSubmit);
    }
  };

  handleTextAreaChange = ({ target: { value } }) => {
    this.setState({
      commentText: value,
    });
  };

  handleRatingSelect = ({ target: { value } }) => {
    this.setState({
      commentRating: Math.round(value),
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.updateCommentList();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { id } = this.props;
    const { commentText, commentRating } = this.state;
    const ratingOption = ratingOptions.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
    const selectedDish = DishListRated.find(dish => dish.id === id);
    const { name, image, description, comments, price } = selectedDish;
    const commentItem = comments.map(item => (
      <li className={styles.comments__item} key={item.id}>
        <p className={styles.comment__text}>{item.commentText}</p>
        <p className={styles.comment__rating}>Rated: {item.commentRating}</p>
      </li>
    ));
    return (
      <section className={styles.dish_page}>
        <div className={styles.container}>
          <div className={styles.dish_details}>
            <img className={styles.dish__image} src={image} alt={name} />
            <h2 className={styles.dish__name}> {name} </h2>
            <p className={styles.dish__description}> {description}</p>
            <p className={styles.dish__price}>Price: {price} $</p>
          </div>
          <div className={styles.dish__user_feeddback}>
            Comments:
            <ul className={styles.comments_list}> {commentItem} </ul>
            <form>
              <textarea
                className={styles.comments__input_text}
                onChange={this.handleTextAreaChange}
                value={commentText}
                placeholder="Leave Your comment..."
              />
              <label>
                Rate the dish
                <select
                  className={styles.comments__rating_select}
                  name="rating"
                  onChange={this.handleRatingSelect}
                  value={commentRating}
                >
                  {ratingOption}
                </select>
              </label>
              <button
                className={styles.button}
                type="submit"
                onClick={this.handleFormSubmit}
              >
                Leave comment
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
